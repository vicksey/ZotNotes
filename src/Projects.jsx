import { useEffect, useState } from "react";
import { ProjectItem } from "./ProjectItem";
import { addDoc, collection, doc, getDocs, onSnapshot, query, setDoc} from "firebase/firestore";
import { db } from "./firebase";
import Swal from "sweetalert2";
 

export function Projects(props) {

  async function addClass() {
    console.log('click');
    const { value: formValues } = await Swal.fire({
      title: "Information",
      html: `
      
      <div style="display: grid; grid-template-columns: auto 1fr; gap: 10px;">
            <label htmlFor="swal-input1" style={{ width: "100px" }}>Date</label>
            <input id="swal-input1" className="swal2-input" style={{ flexGrow: 1 }} />

            <label htmlFor="swal-input2" style={{ width: "100px" }}>Course Name</label>
            <input id="swal-input2" className="swal2-input" style={{ flexGrow: 1 }} />

            <label htmlFor="swal-input3" style={{ width: "100px" }}>Progress</label>
            <input id="swal-input3" className="swal2-input" style={{ flexGrow: 1 }} />
    </div>
      
      `,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value,
          document.getElementById("swal-input3").value

        ];
      }
    });
    if (formValues) {
      console.log(formValues)
      await addDoc(collection(db, "users", props.id, "classes"), {
        date: formValues[0],
        courseName: formValues[1],
        progress: formValues[2]
      });
      // Swal.fire(JSON.stringify(formValues));
    }
  }

const [classList, setClassList] = useState([]);
console.log(props.id, 'SDFSEF')

  useEffect(() => {
    if(!props.id) return;
    
    const q = query(collection(db, "users", props.id, "classes"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let arr = []
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        arr.push(doc.data())
      });
      setClassList(arr)
    });
    

    return unsubscribe;
  }, [props.id]);


  return (
    <div className="projects-section">
      <div className="projects-section-header">
        <p>Notes</p>
        <p className="time">Jan, 27</p>
      </div>
      <div className="projects-section-line">
        <div className="projects-status">
          <div className="item-status">
            <span className="status-number">Add </span>
            <span className="status-type">read</span>
          </div>
          <div className="item-status">
            <span className="status-number">Classes</span>
            <span className="status-type">study</span>
          </div>
          <div className="item-status">
            <span className="status-number">Below</span>
            <span className="status-type">test</span>
          </div>
        </div>
        <div className="view-actions">
          <button className="view-btn list-view" title="List View">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-list"
            >
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
          </button>
          <button className="view-btn grid-view active" title="Grid View">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-grid"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </button>
        </div>
      </div>
      <div className="project-boxes jsGridView">
        {classList.map((item) => (
          <ProjectItem  {...item} />
        ))}
          <button
            onClick={addClass}
            style={{
              backgroundColor: '#DCC7FF', // Light purple color
              color: 'white', // Text color
              padding: '15px 15px', // Padding around the text
              borderRadius: '15px', // Curved edges
              border: 'none', // Remove default border
              boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.2)', // Slight shadow
              cursor: 'pointer', // Cursor changes to a pointer to indicate it's clickable
              transition: 'all 0.3s', // Smooth transition for interactions
            }}
          >
            CLICK ME ADD CLASS
          </button>     
</div>
    </div>
  );
}