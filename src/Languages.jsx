import React ,{useState} from "react";
import { IoIosArrowUp } from 'react-icons/io'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { DragDropContext , Droppable , Draggable } from "react-beautiful-dnd";
import Dropzone from 'react-dropzone';
import { GoPerson } from 'react-icons/go'

const Data = [
  {
    id:"01",
    name:"Employment History",
    description:"Show your relevent experince (last 10 years). use bullet points to note your achievments,if possible use numbers/facts(Achieved X, measured by Y, by doing Z)",
    mob:[{}]
  },
  {
    id:"02",
    name:"Education",
    description:"A varied education on your resume sums up the value that your learnings and background will bring to job",
    mob:[{}]
  },
  {
    id:"03",
    name:"Website & Social Links",
    description:"You can add links to websites you want hiring managers to see! Perhaps it will be a link to your portfolio,LinkedIn profile or personal website",
    mob:[{}]
  },
  {
    id:"04",
    name:"Skills",
    description:"Choose 5 important skills that show you fit the position. Make sure they match the key skills mentioned in the job listing(especially when applying via an online system)",
    mob:[{}]
  }
]

const Item = [
  {
    id:"01",
    name:"Custom Section"
  }, {
    id:"02",
    name:"Course"
  },
  {
    id:"03",
    name:"Extra-curricular activites"
  },
  {
    id:"04",
    name:"Internships"
  },
  {
    id:"05",
    name:"Hobbies"
  },
  {
    id:"06",
    name:"Languages"
  },
  {
    id:"07",
    name:"Refrences"
  }
]


const Languages =()=>{

  const [firstname, setfirstname] = useState('')
  const [name, setname] = useState('')
  const [lastname, setlastname] = useState("")
  const [email, setemail] = useState("")
  const [phone, setphone] = useState("")
  const [country, setcountry] = useState("")
  const [city, setcity] = useState("")
  const [address, setaddress] = useState('')
  const [post, setpost] = useState('')
  const [editorHtml, setEditorHtml] = useState('')
  const [display, setdisplay] = useState(true)
  const [specific, setspecific] = useState(true)
  const [coursee, setcoursee] = useState(true)
  const [reference, setreference] = useState(true);
  const [langu, setlangu] = useState(true)
  const [curricular, setcurricular] = useState(true)
  const [ship, setship] = useState(true)
  const [hobbie, sethobbie] = useState(true)
  const [stores, setStores] = useState(Data)
  const [link, setlink] = useState(Item);
  
  // stores.map((value)=>(
  //   <li key={value.id}>
  //     <p>{value.name}</p>
  //     <ul>
  //       {value.mob.map((text,index)=>(
  //         <li key={index}>{console.log({text})}</li>
  //       ))}
  //     </ul>
  //   </li>
  // ));
  const handlechange = (e) => {
    setfirstname(e.target.value)
  }

  const handlechange1 = (e) => {

    setname(e.target.value)


  }
  

  const handlechange2 = (e) => {

    setlastname(e.target.value)

  }

  const handlechange3 = (e) => {

    setemail(e.target.value)

  }

  const handlechange4 = (e) => {

    setphone(e.target.value)

  }
  const handlechange5 = (e) => {

    setcountry(e.target.value)

  }
  const handlechange6 = (e) => {

    setcity(e.target.value)

  }
  const handlechange7 = (e) => {

    setaddress(e.target.value)

  }
  const handlechange8 = (e) => {

    setpost(e.target.value)

  }
  const handleChange = (html) => {
    setEditorHtml(html);
  };

  const delete2 = () => {
    setcoursee(true)
  }

  const delete3 = () => {
    setreference(true)
  }

  const delete4 = () => {
    setship(true)
  }

  const delete5 = () => {
    setlangu(true)
  }

  const delete6 = () => {
    sethobbie(true)
  }

  const delete7 = () => {
    setcurricular(true)
  }




  const changeedit = () => {
    setdisplay("visible")
  }

  // Drag Drop 

  const handleDragDrop = (results)=>{
    console.log(stores.id);
    const {source, destination, type} = results

    if(!destination) return
    if(source.droppableId === destination.droppableId && source.index === destination.index) return

    if(type === "group"){
      const reorderedStores = [...stores];

      const sourceindex = source.index
      const destinationindex = destination.index

      const [removedStore] = reorderedStores.splice(sourceindex, 1)
      reorderedStores.splice(destinationindex, 0 , removedStore)

      return setStores(reorderedStores)
    }
  }

  const handleDrag = (results)=>{
    const {source, destination, type} = results

    if(!destination) return
    if(source.droppableId === destination.droppableId && source.index === destination.index) return

    if(type === "group"){
      const reorderedStores = [...link];

      const sourceindex = source.index
      const destinationindex = destination.index

      const [removedStore] = reorderedStores.splice(sourceindex, 1)
      reorderedStores.splice(destinationindex, 0 , removedStore)

      return setlink(reorderedStores)
    }
  }

  //  Employment History

  const [objects, setObjects] = useState([]);



  const createObject = () => {
    const newObject = { id: objects.length + 1, input1: '', input2: '', input3: '', input4: '', input5: '' };
    setObjects([...objects, newObject]);
  };

  const handleInputChange = (e, objectId, inputName) => {
    const updatedObjects = objects.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setObjects(updatedObjects);
    stores.map((value)=>{
      
      if (value.id === "01") {
        value.mob = updatedObjects
        console.log(value.mob);
        
      }
     })

  };

  const deleteObject = (objectId) => {
    const updatedObjects = objects.filter((object) => object.id !== objectId);
    setObjects(updatedObjects);
    stores.map((value)=>{
      
      if (value.id === "01") {
        value.mob = updatedObjects
        console.log(value.mob);
        
      }
     })

  };

  // Education

  // Code for Education    
  const [education, seteducation] = useState([]);

  const createeducation = () => {
    const newObject = { id: education.length + 1, input1: '', input2: '', input3: '', input4: '', input5: '' };
    seteducation([...education, newObject]);
   
  };

  const handleInputedu = (e, objectId, inputName) => {
    const updatedObjects = education.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    seteducation(updatedObjects);
    stores.map((value)=>{
      
      if (value.id === "02") {
        value.mob = updatedObjects
        console.log(value.mob);
        
      }
     })
  };

  const deleteedu = (objectId) => {
    const updatedObjects = education.filter((object) => object.id !== objectId);
    seteducation(updatedObjects);
    stores.map((value)=>{
      
      if (value.id === "02") {
        value.mob = updatedObjects
        console.log(value.mob);
        
      }
     })
  };

  //code for website

  const [website, setwebsite] = useState([]);

  const createweb = () => {
    const newObject = { id: website.length + 1, input1: '', input2: '' };
    setwebsite([...website, newObject]);
  };

  const handleInputweb = (e, objectId, inputName) => {
    const updatedObjects = website.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setwebsite(updatedObjects);
    stores.map((value)=>{
      
      if (value.id === "03") {
        value.mob = updatedObjects
        console.log(value.mob);
        
      }
     })
  };

  const deleteweb = (objectId) => {
    const updatedObjects = website.filter((object) => object.id !== objectId);
    setwebsite(updatedObjects);
    stores.map((value)=>{
      
      if (value.id === "03") {
        value.mob = updatedObjects
        console.log(value.mob);
        
      }
     })
  };

  //code for skill

  const [skill, setskill] = useState([]);

  const createskill = () => {
    const newObject = { id: skill.length + 1, input1: '', input2: '',input3:'' };
    setskill([...skill, newObject]);
  };

  const handleInputskill = (e, objectId, inputName) => {
    const updatedObjects = skill.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setskill(updatedObjects);
    stores.map((value)=>{
      
      if (value.id === "04") {
        value.mob = updatedObjects
        console.log(value.mob);
        
      }
     })
  };

  const deleteskill = (objectId) => {
    const updatedObjects = skill.filter((object) => object.id !== objectId);
    setskill(updatedObjects);
    stores.map((value)=>{
      
      if (value.id === "04") {
        value.mob = updatedObjects
        console.log(value.mob);
        
      }
     })
  };

  // Code for Custom
  const [cust, setcust] = useState([]);

  const createcust = () => {
    const newObject = { id: cust.length + 1, input1: '', input2: '', input3: '', input4: '', input5: '' };
    setcust([...cust, newObject]);
  };

  const handleInputcust = (e, objectId, inputName) => {
    const updatedObjects = cust.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setcust(updatedObjects);
  };

  const deletecust = (objectId) => {
    const updatedObjects = cust.filter((object) => object.id !== objectId);
    setcust(updatedObjects);
  };

  //code for course

  const [course, setcourse] = useState([]);

  const createcourse = () => {
    const newObject = { id: course.length + 1, input1: '', input2: '', input3: '', input4: '', input5: '' };
    setcourse([...course, newObject]);
  };

  const handleInputcourse = (e, objectId, inputName) => {
    const updatedObjects = course.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setcourse(updatedObjects);
  };

  const deletecourse = (objectId) => {
    const updatedObjects = course.filter((object) => object.id !== objectId);
    setcourse(updatedObjects);
  };

  //code for Intern

  const [five, setfive] = useState([]);

  const createfive = () => {
    const newObject = { id: five.length + 1, input1: '', input2: '', input3: '', input4: '', input5: '' };
    setfive([...five, newObject]);
  };

  const handleInputfive = (e, objectId, inputName) => {
    const updatedObjects = five.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setfive(updatedObjects);
  };

  const deletefive = (objectId) => {
    const updatedObjects = five.filter((object) => object.id !== objectId);
    setfive(updatedObjects);
  };

  //code for Hobbies

  const [six, setsix] = useState([]);

  const createsix = () => {
    const newObject = { id: six.length + 1, input1: '', input2: '' };
    setsix([...six, newObject]);
  };

  const handleInputsix = (e, objectId, inputName) => {
    const updatedObjects = six.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setsix(updatedObjects);
  };

  const deletesix = (objectId) => {
    const updatedObjects = six.filter((object) => object.id !== objectId);
    setsix(updatedObjects);
  };

  //code for language

  const [seven, setseven] = useState([]);

  const createseven = () => {
    const newObject = { id: seven.length + 1, input1: '', input2: '', input3: '', input4: '', input5: '' };
    setseven([...seven, newObject]);
  };

  const handleInputseven = (e, objectId, inputName) => {
    const updatedObjects = seven.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setseven(updatedObjects);
  };

  const deleteseven = (objectId) => {
    const updatedObjects = seven.filter((object) => object.id !== objectId);
    setseven(updatedObjects);
  };

  //code for reference

  const [three, setthree] = useState([]);

  const createthree = () => {
    const newObject = { id: three.length + 1, input1: '', input2: '', input3: '', input4: '', input5: '' };
    setthree([...three, newObject]);
  };

  const handleInputthree = (e, objectId, inputName) => {
    const updatedObjects = three.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setthree(updatedObjects);
  };

  const deletethree = (objectId) => {
    const updatedObjects = three.filter((object) => object.id !== objectId);
    setthree(updatedObjects);
  };

  //code for Extra-curricular

  const [four, setfour] = useState([]);

  const createfour = () => {
    const newObject = { id: four.length + 1, input1: '', input2: '', input3: '', input4: '', input5: '' };
    setfour([...four, newObject]);
  };

  const handleInputfour = (e, objectId, inputName) => {
    const updatedObjects = four.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setfour(updatedObjects);
  };

  const deletefour = (objectId) => {
    const updatedObjects = four.filter((object) => object.id !== objectId);
    setfour(updatedObjects);
  };


  let tension = () => {
    setspecific(false)

  }
  const delete1 = () =>{
    setspecific(true)
  }

  const certi = () => {
    setcoursee(false)

  }

  const refer = () => {
    setreference(false)

  }

  const lang = () => {
    setlangu(false)

  }

  const extra = () => {
    setcurricular(false)

  }

  const intern = () => {
    setship(false)

  }
  const hobbi = () => {
    sethobbie(false)

  }

  //Profile photo

  const [selectedFile, setSelectedFile] = useState(null);
  const [showFullView, setShowFullView] = useState(false);

  const handleDrop = (acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
    setShowFullView(false);
  };

  const handleDelete = () => {
    setSelectedFile(null);
  };

  const handleView = () => {
    if(!showFullView)
    {
        setShowFullView(true)
    }
    else
    {
        setShowFullView(true)
    }
    
  };



  return(
    <div style={{display:"flex"}}>
      <div className="one">
      <div className="one">
          <h2>Personal Details</h2>
          <div className="job-title">
            <div className="wanted">
              <div className="job">
                <label htmlFor="">Wanted job Title</label> <br />
                <input type="text" value={firstname} onChange={handlechange} className="work" />
              </div>
            </div>
            <div className="photo">
            <div style={{display:"flex"}}>
      
      <Dropzone onDrop={handleDrop} accept="image/*" multiple={false}>
        {({ getRootProps, getInputProps }) => (
          <div className="dropzone" {...getRootProps()}>
            <input {...getInputProps()} />
            {selectedFile?
                (
                    <div className='image'>
                  <div className="image-container">
                    <img
                      src={URL.createObjectURL(selectedFile)}
                      alt="Uploaded"
                      className="rounded-image"
                      onClick={handleView}
                    />
                    
                  </div>
                  
                  </div>
                 
                
              
            ) : (
              <div style={{display:'flex'}}>
                
                <GoPerson className='icon'></GoPerson>
            
                
              </div>
            )}
          </div>
        )}
      </Dropzone>
      <div className='text'>
        {
          selectedFile?
          (
            <div style={{display:"block"}}>
                <button onClick={handleDelete}>Delete</button>
                  <button onClick={handleView}>Edit Photo</button>
            </div>
          ) :(
            <div>
              <h4>Upload photo</h4>
            </div>
          )
        }
      </div>
    </div>
              

            </div>
          </div>
          <div className="job-title">
            <div className="wanted">
              <div className="job">
                <label htmlFor="">First Name</label> <br />
                <input type="text" className="work" value={name} onChange={handlechange1} />
              </div>
            </div>
            <div className="photo">
              <label htmlFor="">Last Name</label> <br />
              <input type="text" className="work" value={lastname} onChange={handlechange2} />
            </div>

          </div>
          <div className="job-title">
            <div className="wanted">
              <div className="job">
                <label htmlFor="">Email</label> <br />
                <input type="email" className="work" value={email} onChange={handlechange3} />
              </div>
            </div>
            <div className="photo">
              <label htmlFor="">Phone</label> <br />
              <input type="number" className="work" value={phone} onChange={handlechange4} />
            </div>


          </div>
          <div className="job-title">
            <div className="wanted">
              <div className="job">
                <label htmlFor="">Country</label> <br />
                <input type="text" className="work" value={country} onChange={handlechange5} />
              </div>
            </div>
            <div className="photo">
              <label htmlFor="">City</label> <br />
              <input type="text" className="work" value={city} onChange={handlechange6} />
            </div>

          </div>
          <div className={display ? "visble" : "hidden"}>
            <div className="job-title">
              <div className="wanted">
                <div className="job">
                  <label htmlFor="">Address</label> <br />
                  <input type="text" className="work" value={address} onChange={handlechange7} />
                </div>
              </div>
              <div className="photo">
                <label htmlFor="">Postal Code</label> <br />
                <input type="text" className="work" value={post} onChange={handlechange8} />
              </div>

            </div>
            <div className={display ? "visble" : "hidden"}>
              <div className="job-title">
                <div className="wanted">
                  <div className="job">
                    <label htmlFor="">Driving License</label> <br />
                    <input type="text" className="work" />
                  </div>
                </div>
                <div className="photo">
                  <label htmlFor="">Nationality</label> <br />
                  <input type="text" className="work" />
                </div>

              </div>
            </div>
            <div className={display ? "visble" : "hidden"}>
              <div className="job-title">
                <div className="wanted">
                  <div className="job">
                    <label htmlFor="">Place Of Birth</label> <br />
                    <input type="text" className="work" />
                  </div>
                </div>
                <div className="photo">
                  <label htmlFor="">Date of Birth</label> <br />
                  <input type="text" className="work" />
                </div>

              </div>
            </div>

          </div>
          <div className="edit">
            <h5 onClick={() => setdisplay(!display)}>Edit additional details  <IoIosArrowUp /></h5>
          </div>

        </div>
        <div className="summaary">
          <div>
            <div>
              <h2>Professional Summary</h2>
            </div>
            <div>
              <p>Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills.</p>
            </div>
            <div>
              <div>
                <ReactQuill
                  theme="snow"
                  value={editorHtml}
                  onChange={handleChange}
                  className='paragh'
                  modules={{
                    toolbar: [
                      ['bold', 'italic', 'underline', 'strike'],
                      [{ 'list': 'ordered' }, { 'list': 'bullet' }],

                      ['link']
                    ]
                  }}
                />
                <div>
                  {/* <h3>Editor Output:</h3>
        <div dangerouslySetInnerHTML={{ __html: editorHtml }} /> */}
                </div>
              </div>

            </div>
            <div>
              <p>Recruiter tip: write 50-200 characters to increase interview chances</p>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="one-one">
          <DragDropContext onDragEnd={handleDragDrop}>
            <div>
              <Droppable droppableId="Root" type="group">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {stores.map((store,index) =>(
                      <Draggable draggableId={store.id} key={store.id} index={index}>
                        {(provided)=>(
                          <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                            <div style={{display:"flex"}}>

                            <div className="first">
                            <h3>{store.name}</h3>
                            {/* <Storelist {...store}/> */}
                            <p>{store.description}</p>
                            {
                              store.name === "Employment History" ? <div>
                                {objects.map((object) => (
                <div key={object.id} style={{ display: "flex" }}>
                  <div className='emp-main'>


                    <div style={{ display: "flex" }}>
                      <div className='wanted'>
                        <div>
                          <label htmlFor="">Job title</label> <br />
                          <input
                            type="text"
                            value={object.input1}
                            className='work'
                            onChange={(e) => handleInputChange(e, object.id, 'input1')}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="">Employer</label> <br />
                        <input
                          type="text"
                          value={object.input2}
                          className='work'
                          onChange={(e) => handleInputChange(e, object.id, 'input2')}
                        />
                      </div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div className='wanted'>
                        <div>
                          <label htmlFor="">Start & End Date</label> <br />
                          <input type='date'
                            value={object.input4}
                            className='work'
                            onChange={(e) => handleInputChange(e, object.id, 'input4')}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="">City</label> <br />
                        <input
                          type="text"
                          value={object.input3}
                          className='work'
                          onChange={(e) => handleInputChange(e, object.id, 'input3')}
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Description</label> <br />
                        
                      </div>
                    </div>


                  </div>
                  <div>
                    <button onClick={() => deleteObject(object.id)}>Delete</button>
                  </div>

                </div>
              ))}
              <button onClick={createObject}> + Add Employment</button>
                              </div> : <span></span>
                            }

                          {/* Education */}

                          {
                            store.name === "Education" ? <div>
                              {education.map((object) => (
                <div key={object.id} style={{ display: "flex" }}>
                  <div className='emp-main'>

                    <div style={{ display: "flex" }}>
                      <div className='wanted'>
                        <div>
                          <label htmlFor="">School</label> <br />
                          <input
                            type="text"
                            value={object.input1}
                            className='work'
                            onChange={(e) => handleInputedu(e, object.id, 'input1')}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="">Degree</label> <br />
                        <input
                          type="text"
                          value={object.input2}
                          className='work'
                          onChange={(e) => handleInputedu(e, object.id, 'input2')}
                        />
                      </div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div className='wanted'>
                        <div>
                          <label htmlFor="">Start & End Date</label> <br />
                          <input type='date'
                            value={object.input4}
                            className='work'
                            onChange={(e) => handleInputedu(e, object.id, 'input4')}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="">City</label> <br />
                        <input
                          type="text"
                          value={object.input3}
                          className='work'
                          onChange={(e) => handleInputedu(e, object.id, 'input3')}
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Description</label> <br />
                        <textarea name="" id="" cols="90" rows="15" value={object.input5} onChange={(e) => handleInputedu(e, object.id, 'input5')}
                          placeholder='e.g. Graduated with High Honors.' />
                      </div>
                    </div>


                  </div>
                  <div>
                    <button onClick={() => deleteedu(object.id)}>Delete</button>
                  </div>
                </div>
              ))}
              <button onClick={createeducation}> + Add education</button>
                  
                            </div> : <span></span>
                          }
                          {/* Website */}

                          {
                               store.name === "Website & Social Links" ? <div>
                                {website.map((object) => (
                <div key={object.id} style={{ display: "flex" }}>
                  <div className='emp-main'>

                    <div style={{ display: "flex" }}>
                      <div className='wanted'>
                        <div>
                          <label htmlFor="">Instagram</label> <br />
                          <input
                            type="text"
                            value={object.input1}
                            className='work'
                            onChange={(e) => handleInputweb(e, object.id, 'input1')}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="">Link</label> <br />
                        <input
                          type="text"
                          value={object.input2}
                          className='work'
                          onChange={(e) => handleInputweb(e, object.id, 'input2')}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <button onClick={() => deleteweb(object.id)}>Delete</button>
                  </div>
                </div>
              ))}
              <button onClick={createweb}> + Add Link</button>

                               </div> : <span></span>
                          }

                          {/* Code for skill */}
                          {
                            store.name === "Skills" ? <div>
                              {skill.map((object) => (
                <div key={object.id} style={{ display: "flex" }}>
                  <div className='emp-main'>

                    <div style={{ display: "flex" }}>
                      <div className='wanted'>
                        <div style={{display:"flex"}}>
                          <div>
                          <label htmlFor="">Label</label> <br />
                          <input
                            type="text"
                            value={object.input1}
                            className='work'
                            onChange={(e) => handleInputskill(e, object.id, 'input1')}
                          />
                          </div>
                          <div>
                          <label htmlFor="">Level</label> <br />
                          <input
                            type="text"
                            value={object.input2}
                            className='work'
                            onChange={(e) => handleInputskill(e, object.id, 'input2')}
                          />
                          <select name="" id="" value={object.input3} onChange={(e) => handleInputskill(e, object.id, 'input3')}>
                            <option value="1">Level 1</option>
                            <option value="2">Level 2</option>
                            <option value="3">Level 3</option>
                            <option value="4">Level 4</option>
                            <option value="5">Level 5</option>
                          </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button onClick={() => deleteskill(object.id)}>Delete</button>
                  </div>
                </div>
              ))}
              <button onClick={createskill}> + Add more skill</button>
                            </div> : <span></span>
                          }
                          
                            

                            <div>
                            
                            </div>
                            </div>
                            <div className="night">
                              <Storelist {...store}/>
                            </div>
                            
                            </div>
                          </div>
                        )}
                         
                      </Draggable>
                     
                    ))}

                  </div>
                )}
              </Droppable>

            </div>
          </DragDropContext>
          <div>
            
            <DragDropContext onDragEnd={handleDrag}>
              <div>
                <Droppable droppableId="Root" type="group">
                  {(proved) => (
                    <div {...proved.droppableProps} ref={proved.innerRef}>
                      {link.map((link,index)=>(
                        <Draggable draggableId={link.id} key={link.id} index={index}>
                          {(proved)=>(
                            <div {...proved.dragHandleProps} {...proved.draggableProps} ref={proved.innerRef}>
                              {
                                link.name === "Custom Section" ? <div className={specific ? "hidden" : "visible"}>
                                  <div className='emp-div'>

{cust.map((object) => (
  <div key={object.id} style={{ display: "flex" }}>
    <div className='emp-main'>

      <div style={{ display: "flex" }}>
        <div className='wanted'>
          <div>
            <label htmlFor="">Job title</label> <br />
            <input
              type="text"
              value={object.input1}
              className='work'
              onChange={(e) => handleInputcust(e, object.id, 'input1')}
            />
          </div>
        </div>
        <div>
          <label htmlFor="">Employer</label> <br />
          <input
            type="text"
            value={object.input2}
            className='work'
            onChange={(e) => handleInputcust(e, object.id, 'input2')}
          />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className='wanted'>
          <div>
            <label htmlFor="">Start & End Date</label> <br />
            <input type='date'
              value={object.input4}
              className='work'
              onChange={(e) => handleInputcust(e, object.id, 'input4')}
            />
          </div>
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="">Description</label> <br />
          <textarea name="" id="" cols="90" rows="15" value={object.input5} onChange={(e) => handleInputcust(e, object.id, 'input5')}
            placeholder='e.g. Created and implemented lesson plans based on child-led
interests and curiosities'/>
        </div>
      </div>


    </div>
    <div>
      <button onClick={() => deletecust(object.id)}>Delete</button>
    </div>
  </div>
))}
<button onClick={createcust}> + Add one more item</button>

</div>
<button onClick={delete1}>delete</button>
                                </div> : <span></span>
                              }
                              {
                                link.name === "Course" ? <div className={coursee ? "hidden" : "visible"}>
                                  <div className='emp-div'>

{course.map((object) => (
  <div key={object.id} style={{ display: "flex" }}>
    <div className='emp-main'>

      <div style={{ display: "flex" }}>
        <div className='wanted'>
          <div>
            <label htmlFor="">Job title</label> <br />
            <input
              type="text"
              value={object.input1}
              className='work'
              onChange={(e) => handleInputcourse(e, object.id, 'input1')}
            />
          </div>
        </div>
        <div>
          <label htmlFor="">Employer</label> <br />
          <input
            type="text"
            value={object.input2}
            className='work'
            onChange={(e) => handleInputcourse(e, object.id, 'input2')}
          />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className='wanted'>
          <div>
            <label htmlFor="">Start & End Date</label> <br />
            <input type='date'
              value={object.input4}
              className='work'
              onChange={(e) => handleInputcourse(e, object.id, 'input4')}
            />
          </div>
        </div>

      </div>



    </div>
    <div>
      <button onClick={() => deletecourse(object.id)}>Delete</button>
    </div>
  </div>
))}
<button onClick={createcourse}> + Add one more course</button>

</div>
<button onClick={delete2}>delete</button>
                                </div> : <span></span>
                              }
                              {
                                link.name === "Internships" ? <div>
                                  <div className='emp-div'>

{five.map((object) => (
  <div key={object.id} style={{ display: "flex" }}>
    <div className='emp-main'>

      <div style={{ display: "flex" }}>
        <div className='wanted'>
          <div>
            <label htmlFor="">Job title</label> <br />
            <input
              type="text"
              value={object.input1}
              className='work'
              onChange={(e) => handleInputfive(e, object.id, 'input1')}
            />
          </div>
        </div>
        <div>
          <label htmlFor="">Employer</label> <br />
          <input
            type="text"
            value={object.input2}
            className='work'
            onChange={(e) => handleInputfive(e, object.id, 'input2')}
          />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className='wanted'>
          <div>
            <label htmlFor="">Start & End Date</label> <br />
            <input type='date'
              value={object.input4}
              className='work'
              onChange={(e) => handleInputfive(e, object.id, 'input4')}
            />
          </div>
        </div>
        <div>
          <label htmlFor="">City</label> <br />
          <input
            type="text"
            value={object.input3}
            className='work'
            onChange={(e) => handleInputfive(e, object.id, 'input3')}
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="">Description</label> <br />
          
        </div>
      </div>


    </div>
    <div>
      <button onClick={() => deletefive(object.id)}>Delete</button>
    </div>
  </div>
))}
<button onClick={createfive}> + Add one more internship</button>

</div>
<button onClick={delete4}>delete</button>
                                </div> : <span></span>
                              }
                              {
                                link.name === "Hobbies" ? <div className={hobbie? "hidden" : "visible"}>
                                  <div className='emp-div'>

{six.map((object) => (
  <div key={object.id} style={{ display: "flex" }}>
    <div className='emp-main'>

      <div style={{ display: "flex" }}>
        <div className='wanted'>
          <div>
            <label htmlFor="">Label</label> <br />
            <input
              type="text"
              value={object.input1}
              className='work'
              onChange={(e) => handleInputsix(e, object.id, 'input1')}
            />
          </div>
        </div>
      </div>
    </div>
    <div>
      <button onClick={() => deletesix(object.id)}>Delete</button>
    </div>
  </div>
))}
<button onClick={createsix}> + Add more Hobbie</button>

</div>
<button onClick={delete6}>delete</button>
                                </div> : <span></span>
                              }
                              {
                                link.name === "Languages" ? <div className={langu? "hidden" : "visible"}>
                                  <div className='emp-div'>

{seven.map((object) => (
  <div key={object.id} style={{ display: "flex" }}>
    <div className='emp-main'>

      <div style={{ display: "flex" }}>
        <div className='wanted'>
          <div>
            <label htmlFor="">Job title</label> <br />
            <input
              type="text"
              value={object.input1}
              className='work'
              onChange={(e) => handleInputseven(e, object.id, 'input1')}
            />
          </div>
        </div>
        <div>
          <label htmlFor="">Employer</label> <br />
          <input
            type="text"
            value={object.input2}
            className='work'
            onChange={(e) => handleInputseven(e, object.id, 'input2')}
          />
        </div>
      </div>


    </div>
    <div>
      <button onClick={() => deleteseven(object.id)}>Delete</button>
    </div>
  </div>
))}
<button onClick={createseven}> + Add one more languages</button>

</div>
<button onClick={delete5}>delete</button>
                                </div> : <span></span>
                              }
                              {
                                link.name === "Refrences" ? <div className={reference ? "hidden" : "visible"}>
                                  <div className='emp-div'>

{three.map((object) => (
  <div key={object.id} style={{ display: "flex" }}>
    <div className='emp-main'>

      <div style={{ display: "flex" }}>
        <div className='wanted'>
          <div>
            <label htmlFor="">Job title</label> <br />
            <input
              type="text"
              value={object.input1}
              className='work'
              onChange={(e) => handleInputthree(e, object.id, 'input1')}
            />
          </div>
        </div>
        <div>
          <label htmlFor="">Employer</label> <br />
          <input
            type="text"
            value={object.input2}
            className='work'
            onChange={(e) => handleInputthree(e, object.id, 'input2')}
          />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className='wanted'>
          <div>
            <label htmlFor="">Start & End Date</label> <br />
            <input type='date'
              value={object.input4}
              className='work'
              onChange={(e) => handleInputthree(e, object.id, 'input4')}
            />
          </div>
        </div>

      </div>



    </div>
    <div>
      <button onClick={() => deletethree(object.id)}>Delete</button>
    </div>
  </div>
))}
<button onClick={createthree}> + Add one more reference</button>

</div>
<button onClick={delete3}>delete</button>
                                </div> : <span></span>
                              }
                              {
                                link.name === "Extra-curricular activites" ? <div className={curricular ? "hidden" : "visible"}>
                                  <div className='emp-div'>

{four.map((object) => (
  <div key={object.id} style={{ display: "flex" }}>
    <div className='emp-main'>

      <div style={{ display: "flex" }}>
        <div className='wanted'>
          <div>
            <label htmlFor="">Job title</label> <br />
            <input
              type="text"
              value={object.input1}
              className='work'
              onChange={(e) => handleInputfour(e, object.id, 'input1')}
            />
          </div>
        </div>
        <div>
          <label htmlFor="">Employer</label> <br />
          <input
            type="text"
            value={object.input2}
            className='work'
            onChange={(e) => handleInputfour(e, object.id, 'input2')}
          />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className='wanted'>
          <div>
            <label htmlFor="">Start & End Date</label> <br />
            <input type='date'
              value={object.input4}
              className='work'
              onChange={(e) => handleInputfour(e, object.id, 'input4')}
            />
          </div>
        </div>
        <div>
          <label htmlFor="">City</label> <br />
          <input
            type="text"
            value={object.input3}
            className='work'
            onChange={(e) => handleInputfour(e, object.id, 'input3')}
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="">Description</label> <br />
          <textarea name="" id="" cols="90" rows="15" value={object.input5} onChange={(e) => handleInputfour(e, object.id, 'input5')}
            placeholder='e.g. Created and implemented lesson plans based on child-led
interests and curiosities'/>
        </div>
      </div>


    </div>
    <div>
      <button onClick={() => deletefour(object.id)}>Delete</button>
    </div>
  </div>
))}
<button onClick={createfour}> + Add Employment</button>

</div>
<button onClick={delete7}>delete</button>
                                </div> : <span></span>
                              }
                            </div>
                          )}
                        </Draggable>
                      ))}
                    </div>
                  )}
                </Droppable>
              </div>
            </DragDropContext>
            <div>
          <div>
            <h2>Add Section</h2>
          </div>
          <div>
            <button onClick={tension}> <img src="https://icons-for-free.com/iconfiles/png/512/customize+levels+settings+icon-1320085880730884001.png" alt="" className="icons" /> Custom Section</button>
            <button onClick={certi}> <img src="https://p7.hiclipart.com/preview/522/461/307/computer-icons-academic-certificate-certification-diploma-training-course.jpg" alt="" className="icons" /> Courses</button>
          </div>
          <div>
            <button onClick={extra}> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJkWdMzuZ9a2FgYPotBkT9ELxs_Y1EUQMZXg&usqp=CAU" alt="" className="icons" /> Extra-curricular Activities</button>
            <button onClick={intern}> <img src="https://cdn-icons-png.flaticon.com/512/1945/1945648.png" alt="" className="icons" /> Internships</button>
          </div>
          <div>
            <button onClick={hobbi}> <img src="https://static.thenounproject.com/png/3654397-200.png" alt="" className="icons" /> Hobbies</button>
            <button onClick={lang}> <img src="https://cdn-icons-png.flaticon.com/512/484/484633.png" alt="" className="icons" /> Languages</button>
          </div>
          <div>
            <button onClick={refer}> <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX41086475.jpg" alt="" className="icons" /> References</button>
          </div>
        </div>
          </div>
          
        </div>
      </div>
      <div className="raj">
        
        
      </div>

    </div>
  )
}

function Storelist({id,name,mob,description}){
  return(
    <div className="story">
      <div>
        {mob.map((value,index) => (
          <div>
            {console.log(value)}
            <h3 className="hii">{value.input1}</h3>
            <h3 className="hii">{value.input2}</h3>
            <h3 className="hii">{value.input3}</h3>
          </div>
        ))}
      </div>
      
    </div>
  )
}



export default Languages