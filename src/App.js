import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const Time = new Date().toLocaleTimeString();

  const [data, setdata] = useState({
    name: "",
    comment: "",
  });

  const change = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const [final, setfinal] = useState([]);
  const Submit = () => {
    setfinal([...final, data]);
  };

  return (

    <div className="container">
      <h1 className='text-center mt-5'>Comment / Review</h1>
      <hr />
      <div className='paregraf row mt-4'>
        <p>A comment serves as a valuable means of communication, allowing individuals to express their thoughts, opinions, and reactions to various topics, whether in written or spoken form. Comments play a significant role in the digital age, as they facilitate online discussions, promote engagement, and provide a platform for diverse perspectives.</p>
        <p>In the realm of social media, comments enable users to connect, share, and debate ideas, fostering a sense of community. They can also offer constructive feedback, helping content creators improve their work. However, comments are not without their challenges. Online anonymity can encourage negativity and trolling, creating toxic environments. To mitigate this, moderation and guidelines are often necessary to maintain a respectful discourse.</p>
        <p>In academic and professional settings, comments are used for peer reviews, offering constructive criticism and suggestions to enhance the quality of research, writing, or presentations. In software development, code comments are essential for documentation, making it easier for developers to understand and maintain complex programs.</p>
        <p>Ultimately, comments are a powerful tool that can enhance communication and collaboration when used responsibly. They enable dialogue, foster understanding, and contribute to the collective knowledge of society, making them a vital aspect of our interconnected world.</p>
        <p>In the digital sphere, comments are a cornerstone of social media and online communities. They enable users to connect, share ideas, and participate in discussions about a wide range of topics, from politics and entertainment to hobbies and personal experiences. Comments provide a platform for diverse voices, allowing people from different backgrounds and perspectives to engage in dialogue and gain a deeper understanding of one another. This exchange of ideas can lead to greater social awareness and empathy.</p>
      </div>
      <hr />
      <form >
        <div className='d-flex mt-5'>
          <div className='user border border-end-0 border-success  form d-flex align-items-center text-center ps-3'>
            <i className="fa-solid fa-user py-3 user-icon"></i>
          </div>
          <hr />
          <form className='border border-success card card-body'>
            <div className="mb-3">
              <label for="exampleFormControlInput1" htmlFor="" className="form-label">Name :</label>
              <input name="name" type="name" className="form-control input border-success" onChange={change} id="exampleFormControlInput1" placeholder="Full Name" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" htmlFor="textAreaExample" className="form-label">Comment :</label>
              <textarea name="comment" type="comment" className="form-control input border-success" onChange={change} rows="3" placeholder='Comment'></textarea>
            </div>
          </form>
        </div>
        <div className='my-4 float-end'>
          <button type='button' className='btn btn-primary fs-5 px-5' onClick={Submit}>Submit</button>
        </div>
      </form>

      <center className="mt-4">
        <div className="col-8 output">
          {final.map((val, index) => {
            return (
              <div key={index}
                className="card bg-transparent border-success card-body" style={{border: "2px solid #eee", margin: "5px 0px 5px 0 "}}>
                <div className="d-flex flex-start align-items-center">
                  <i className="fa-solid fa-user user-i mx-3"></i>
                  <div>
                    <h4 className="fw-bold text-dark float-start mb-1">
                      {val.name}
                    </h4>
                    <br/>
                    <p className="mt-3 mb-3 float-start d-block ">
                      {val.comment}
                    </p>
                    <p className="text-muted small float-start mb-2">
                      Time:- {Time}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </center>



    </div>
  );
}

export default App;