import { Link } from 'react-router-dom';

function PrevButton() {
  return (
    <>
      <Link to={-1}><img style={{width: "40px"}}src="/public/back-arrow.svg" alt="뒤로가기 버튼" /></Link>
    </>
  );
}

export default PrevButton;
