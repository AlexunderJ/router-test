import React from "react";

const Article = ({ title, author, text }) => {
  const styles = {
    marginTop: 40,
  };
  return (
    <article style={styles}>
      <h1
        style={{
          textTransform: "uppercase",
        }}
      >
        {title}
      </h1>
      <h3
        style={{
          marginBottom: 3,
          color: "#ccc",
          fontSize: 16,
        }}
      >
        {author}
      </h3>
      <p>{text}</p>
    </article>
  );
};

export default Article;
