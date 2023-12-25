"use client"

import React, { useEffect, useState } from 'react'
import styles from './writePage.module.css'
import Image from 'next/image'
import "react-quill/dist/quill.bubble.css";
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import ReactQuill from "react-quill";

const WritePage = () => {
  const { status } = useSession();

  const router = useRouter();

  const [open, setOpen] = useState(false)
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("")
  const [title, setTitle] = useState("")
  const [catSlug, setCatSlug] = useState("");

  useEffect(() => {
     const storage = getStorage(app);
     const upload = () => {
       const name = new Date().getTime() + file.name;
       const storageRef = ref(storage, name);

       const uploadTask = uploadBytesResumable(storageRef, file);

       uploadTask.on(
         "state_changed",
         (snapshot) => {
           const progress =
             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
           console.log("Upload is " + progress + "% done");
           switch (snapshot.state) {
             case "paused":
               console.log("Upload is paused");
               break;
             case "running":
               console.log("Upload is running");
               break;
           }
         },
         (error) => {},
         () => {
           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
             setMedia(downloadURL);
           });
         }
       );
     };
    file && upload();
  },[file])
  
  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");


  const handleSubmit  = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "hotdeals", //If not selected, choose the general category
      }),
    });
  }
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className={styles.select}
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value="hotdeals">hotdeals</option>
        <option value="cafes">cafes</option>
        <option value="resturants">resturants</option>
        <option value="medical">medical</option>
        <option value="hotels">hotels</option>
        <option value="trips">trips</option>
        <option value="workspace">workspace</option>
        <option value="realestate">realestate</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/image.png" alt="" width={16} height={16} />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
}

export default WritePage
