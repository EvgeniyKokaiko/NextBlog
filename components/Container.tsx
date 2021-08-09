import NavBar from "./NavBar";

const Container = ({ children }): JSX.Element => {
  return (
    <div>
      <div className="main_container">
        <NavBar />
        {children}
      </div>
    </div>
  );
};

export default Container;
