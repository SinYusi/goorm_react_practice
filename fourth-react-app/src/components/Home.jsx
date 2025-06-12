import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      1. <Link to='/tictacto'>틱택토 게임</Link> <br />
      2. <Link to="/use-api">API 사용 & 무한 스크롤</Link> <br />
    </>
  )
}