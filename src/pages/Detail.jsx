import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const datas = [
    { id: 1, text: "저는 디테일 원 입니다." },
    { id: 2, text: "저는 디테일 투 입니다." },
    { id: 3, text: "저는 디테일 쓰리 입니다." },
  ];

  const params = useParams();
  console.log(params);

  return (
    <>
      <div>저는 디테일입니다.</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {datas.map((data) => {
          return (
            <>
              <Link to={`/detail/${data.id}`}>{data.text}</Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Detail;
