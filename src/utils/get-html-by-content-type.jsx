export const getHtmlByContentType = ({ type, content, id }) => {
  if (type === "paragraph") {
    return (
      <p key={id}>
        {Array.isArray(content)
          ? content.map((each) => getHtmlByContentType(each))
          : content}
      </p>
    );
  }

  if (type === "hyperlink") {
    return (
      <a key={id} href="#">
        {content}
      </a>
    );
  }

  return <span key={id}>{content}</span>;
};
