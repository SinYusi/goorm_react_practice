import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      1. <Link to='/mandoo'>만두 컴포넌트</Link> <br />
      2. <Link to="/counter">카운터</Link> <br />
      3. <Link to="/login">로그인</Link> <br />
    </>
  )
}