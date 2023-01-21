import "./style.scss";

const PageHeaderContent = (props) => {
  const { headerTitle, icon } = props;
  return (
    <div className="wrapper">
      <h2>{headerTitle}</h2>
      <span>{icon}</span>
    </div>
  );
};

export default PageHeaderContent;
