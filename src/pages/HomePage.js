import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Co za tytuł ! piękny",
    author: "Nowak Jan",
    text:
      "Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita amet eligendi delectus rerum non, asperiores tempora dolorem obcaecati voluptas aperiam hic, beatae, enim pariatur tempore? Nemo totam consequuntur vitae ducimus.Laboriosam veritatis eaque repellat, ab quos molestiae nihil possimus nostrum animi voluptatum ipsa qui delectus aliquam sed commodi fugit iste illo vero nulla officiis. Assumenda in sit tempore obcaecati rerum.",
  },
  {
    id: 2,
    title: "22 za tytuł2 2! 2piękn222",
    author: "Knowaciel Mateusz",
    text:
      "Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita amet eligendi delectus rerum non, asperiores tempora dolorem obcaecati voluptas aperiam hic, beatae, enim pariatur tempore? Nemo totam consequuntur vitae ducimus.Laboriosam veritatis eaque repellat, ab quos molestiae nihil possimus nostrum animi voluptatum ipsa qui delectus aliquam sed commodi fugit iste illo vero nulla officiis. Assumenda in sit tempore obcaecati rerum.",
  },
  {
    id: 3,
    title: "3 za3 3tytuł 3! piękny",
    author: "Gal Asterix",
    text:
      "eaque repellat, ab quos molestiae nihil possimus nostrum animi voluptatum ipsa qui delectus aliquam sed commodi fugit iste illo vero nulla officiis. Assumenda in sit tempore obcaecati rerum.",
  },
];

const HomePage = () => {
  const artList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));
  return (
    <div className="home">
      <h1>Artukóły</h1>
      {artList}
      <i>New</i>
    </div>
  );
};

export default HomePage;
