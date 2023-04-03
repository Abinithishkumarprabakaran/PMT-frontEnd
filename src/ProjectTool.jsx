export function ProjectTool() {
  return (
    <div>
      <div className="grid grid-cols-1">
        <div className="col-span-1">
          <h1 className="font-bold">Project Tool</h1>
        </div>
        <div className="grid grid-cols-12">

          <div className="col-span-3">
            <div className="card">
              Requested
            </div>
          </div>

          <div className="col-span-3">
            <div className="card">
              Tasks
            </div>
          </div>

          <div className="col-span-3">
            <div className="card">
              In Progress
            </div>
          </div>

          <div className="col-span-3">
            <div className="card">
              Completed
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
