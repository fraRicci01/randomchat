import React from "react"
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Upload = () =>{
  const [img, setImg] = useState("none");
  const [textarea, setTextarea] = useState("none");
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  /*const handleSubmit = async (e) => {
    const date = new Date().getTime();
        const storageRef = ref(storage, `${displayName + date}`);

        await uploadBytesResumable(storageRef, img).then(() => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            try {
              //Update profile
              await updateProfile(res.user, {
                displayName,
                photoURL: downloadURL,
              });
              //create user on firestore
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName,
                email,
                photoURL: downloadURL,
              });

              //error cach
            } catch (err) {
              console.log(err);
              setErr(true);
              setLoading(false);
            }
          });
        });
  }*/

  const handelChange = (e) => {
    if (e.target.name === "textarea") {
      setTextarea = e.target.value
      console.log(e.target.value)
    }
    else if (e.target.name === "img") {
      setImg = e.target.value
      console.log(e.target.value)
    }
    else {
      setErr = true
    }
  }

  return (  
    <div style={{marginTop: "100px"}}>
      <div class="card" style={{width: "60%", margin: "auto"}} >
        {img != "none" &&
          <div class="card mb-3" style={{maxWidth: "540px", }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src="img" class="card-img-top" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">{textarea}</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        }
        <div class="card-body">
          <form>
            <div class="mb-3">
              <input class="form-control" type="file" id="formFile" onChange={handelChange} nmae="img" />
            </div>
            <p><small>Write heare your Descriprion of image</small></p>
            <div class="mb-3">
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handelChange} name="textarea" ></textarea>
            </div>
            <button type="Submit" class="btn btn-primary">Primary</button>
          </form>
        </div>
      </div>
    </div>  
  );
}

export default Upload;