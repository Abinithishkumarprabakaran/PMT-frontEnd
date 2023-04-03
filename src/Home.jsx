export function Home() {
  return (
    <div>
      <div className="home">
        <img className="home-img" src='https://www.ntaskmanager.com/wp-content/uploads/2020/01/What-are-the-Project-Management-Tools-that-are-used-for-effective-Project-Planning-01.png'/>
      </div>

      <br></br>

      <div className="prj-btn">
        <div onClick={() => console.log("Button Clicked")}>
          <label className="text-3xl font-bold">Add Project</label>
        </div>
      </div>
    </div>
  );
}