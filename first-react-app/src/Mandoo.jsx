// Mandoo.jsx
import MandooImg from "./assets/mandoo.png";

export default function Mandoo({ borderColor, imgWidth }) {
  return (
    // div 에는 border 가 5px solid 이고 props 로 받아온 컬러가 보입니다
    // div 의 아래쪽 바깥 여백은 20px 입니다
    // 모든 css 는 inline css 로 작성해주세요
    <div style={{ border: `5px solid ${borderColor}` }}>
      <span>img size : {imgWidth}</span> // 여기 받아온 이미지 width 값이 보여야함
      <img style={{ display: "block", width: imgWidth }} src={MandooImg} /> // 여기 받아온 이미지 width 로 이미지 사이즈가 조정됨
    </div>
  )
}