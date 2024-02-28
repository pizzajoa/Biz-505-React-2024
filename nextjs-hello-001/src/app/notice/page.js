import Link from "next/link";
import { selectAll } from "../api/notice";

// import styles from "../css/NoticeInput.css";
export default async () => {
  const noticeList = await selectAll();
  const viewList = noticeList.map((item) => {
    return (
      <li>
        <span>{item.m_author}</span>
        <span>{item.m_subject}</span>
      </li>
    );
  });
  return (
    <div>
      <ul>{viewList}</ul>
      <h1>공지사항 리스트</h1>
      <Link href="/notice/input">공지사항 작성</Link>
    </div>
  );
};
