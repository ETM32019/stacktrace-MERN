import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Message from "../components/Message";

const BugEditScreen = () => {
  const [title, setTitle] = useState("");
  const [project, setProject] = useState("");
  const [type, setType] = useState("");
  const [repoSteps, setRepoSteps] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("");
  const [assignmentTo, setAssignmentTo] = useState("");
  const [priority, setPriority] = useState("");
  const [severity, setSeverity] = useState("");
  const [originalEstimate, setOriginalEstimate] = useState("");
  const [remaining, setRemaining] = useState("");
  const [hoursSpent, setHoursSpent] = useState("");
  const [levelOfEffort, setLevelOfEffort] = useState("");
  const priorityRange = [1, 2, 3, 4, 5];
  const originalEstimateRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const remainingRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const hoursSpentRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const levelOfEffortRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [message, setMessage] = useState("");
  // if Remaining Hours is GT the Original Estimate, throw error
  // if Hours Spent is GT the Remaining hours, throw error
  useEffect(() => {
    if (remaining > originalEstimate) {
      setMessage("Remaining hours can't be greater than Original Estimate");
    } else if (hoursSpent > remaining) {
      setMessage("Hours spent can't be greater than remaining hours");
    }
  }, [remaining, originalEstimate, hoursSpent]);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Edit Submission Confirmed");
  };
  return (
    <>
      <section className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-8 text-white">
              <form>
                <div className="mb-3">
                  <label htmlFor="titleInputField" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="titleInputField"
                    placeholder="Example Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="projectInputField" className="form-label">
                    Project
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="projectInputField"
                    placeholder="Example Project"
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="typeInputField" className="form-label pr-2">
                    Type
                  </label>
                  <select
                    id="typeInputField"
                    className="form-select mr-1"
                    aria-label="Default select example"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option selected>Select Type</option>
                    <option value="Bug">Bug</option>
                    <option value="Issue">Issue</option>
                    <option value="Design">Design</option>
                    <option value="Test Case">Test Case</option>
                  </select>
                  <label htmlFor="statusInputField" className="form-label pr-2">
                    Status
                  </label>
                  <select
                    id="statusInputField"
                    className="form-select mr-1"
                    aria-label="Default select example"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option selected>Select Status</option>
                    <option value="Resolved">Resolved</option>
                    <option value="Closed">Closed</option>
                    <option value="Active">Active</option>
                    <option value="New">New</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="repoStepsInputField" className="form-label">
                    Assigned To
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="repoStepsInputField"
                    placeholder="Assigned To..."
                    value={assignmentTo}
                    onChange={(e) => setAssignmentTo(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="repoStepsInputField" className="form-label">
                    Repo Steps
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="repoStepsInputField"
                    placeholder="Step1, Step2, Step3, Step4..."
                    value={repoSteps}
                    onChange={(e) => setRepoSteps(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="descriptionTextArea" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="descriptionTextArea"
                    rows="5"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="col-md-4 text-white pt-4">
              <form>
                <div className="mb-3">
                  <label
                    htmlFor="prioritySelectionField"
                    className="form-label pr-2"
                  >
                    Priority
                  </label>
                  <select
                    id="prioritySelectionField"
                    className="form-select mr-1"
                    aria-label="Priority Selection Field"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                  >
                    <option selected>Select Priority Level</option>
                    {priorityRange.map((x) => (
                      <>
                        <option key={x} value={x}>
                          {x}
                        </option>
                      </>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="severitySelectionField"
                    className="form-label pr-2"
                  >
                    Severity
                  </label>
                  <select
                    id="severitySelectionField"
                    className="form-select mr-1"
                    aria-label="Severity Selection Field"
                    value={severity}
                    onChange={(e) => setSeverity(e.target.value)}
                  >
                    <option selected>Select Severity</option>
                    <option value="1 - Critical">1 - Critical</option>
                    <option value="2 - High">2 - High</option>
                    <option value="3 - Medium">3 - Medium</option>
                    <option value="4 - Low">4 - Low</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="originalEstimateSelectionField"
                    className="form-label pr-2"
                  >
                    Original Estimate
                  </label>
                  <select
                    id="originalEstimateSelectionField"
                    className="form-select mr-1"
                    aria-label="Original Estimate Selection Field"
                    value={originalEstimate}
                    onChange={(e) => setOriginalEstimate(e.target.value)}
                  >
                    <option selected>Select Original Estimate Time</option>
                    {originalEstimateRange.map((x) => (
                      <option key={x} value={x}>
                        {x}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="hoursSpentSelectionField"
                    className="form-label pr-2"
                  >
                    Hours Spent
                  </label>
                  <select
                    id="hoursSpentSelectionField"
                    className="form-select mr-1"
                    aria-label="Remaining Selection Field"
                    value={hoursSpent}
                    onChange={(e) => setHoursSpent(e.target.value)}
                  >
                    <option selected>Select Hours Spent</option>
                    {hoursSpentRange.map((x) => (
                      <option key={x} value={x}>
                        {x}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="remainingSelectionField"
                    className="form-label pr-2"
                  >
                    Remaining
                  </label>
                  <select
                    id="remainingSelectionField"
                    className="form-select mr-1"
                    aria-label="Remaining Selection Field"
                    value={remaining}
                    onChange={(e) => setRemaining(e.target.value)}
                  >
                    <option selected>Select Remaining Time</option>
                    {remainingRange.map((x) => (
                      <option key={x} value={x}>
                        {x}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="levelOfEffortSelectionField"
                    className="form-label pr-2"
                  >
                    Level of Effort
                  </label>
                  <select
                    id="levelOfEffortSelectionField"
                    className="form-select mr-1"
                    aria-label="Level of Effort Selection Field"
                    value={levelOfEffort}
                    onChange={(e) => setLevelOfEffort(e.target.value)}
                  >
                    <option selected>Select Level of Effort</option>
                    {levelOfEffortRange.map((x) => (
                      <option key={x} value={x}>
                        {x}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  {message && <Message variant="danger">{message}</Message>}
                  <button
                    className="btn btn-primary btn-block"
                    onClick={submitHandler}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BugEditScreen;