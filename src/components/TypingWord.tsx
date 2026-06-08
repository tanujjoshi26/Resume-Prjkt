"use client";

import { useEffect, useState } from "react";

const WORDS = ["DevOps", "Cloud", "AWS", "Terraform", "Kubernetes"];
const TYPE_SPEED = 90;
const DELETE_SPEED = 55;
const PAUSE_AFTER_TYPE = 1600;
const PAUSE_AFTER_DELETE = 400;

export default function TypingWord() {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Cursor blink
  useEffect(() => {
    const id = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  // Typing logic
  useEffect(() => {
    const current = WORDS[wordIndex];

    if (!isDeleting && displayed === current) {
      // Finished typing — pause then start deleting
      const id = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
      return () => clearTimeout(id);
    }

    if (isDeleting && displayed === "") {
      // Finished deleting — pause then move to next word
      const id = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % WORDS.length);
      }, PAUSE_AFTER_DELETE);
      return () => clearTimeout(id);
    }

    const speed = isDeleting ? DELETE_SPEED : TYPE_SPEED;
    const id = setTimeout(() => {
      setDisplayed(
        isDeleting
          ? current.slice(0, displayed.length - 1)
          : current.slice(0, displayed.length + 1)
      );
    }, speed);

    return () => clearTimeout(id);
  }, [displayed, isDeleting, wordIndex]);

  return (
    <span className="kw-lime inline-flex items-center" style={{ minWidth: "10ch" }}>
      {displayed}
      <span
        className="ml-0.5 w-[3px] h-[0.85em] rounded-sm bg-black inline-block align-middle"
        style={{ opacity: showCursor ? 1 : 0, transition: "opacity 0.1s" }}
      />
    </span>
  );
}
