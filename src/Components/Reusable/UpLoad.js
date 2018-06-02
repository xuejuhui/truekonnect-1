import React from 'react';
import { Upload } from  "../../Redux/actions/upload"
import {connect} from 'react-redux';
import Dropzone  from 'react-dropzone';
import upload  from'superagent';
import axios from "axios"

class UpLoad extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedFile : null,
			image: null
		}
	}

	fileSelectedHandler = (e) => {
		this.setState({
			selectedFile:e.target.files[0] 
		});
	}
	fileUploadHandler = (e) =>{
	const fd = new FormData();
	fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
      upload.post('http://localhost:8080/upload')
      .attach("image", this.state.selectedFile)
      .end((err, res) => {
        if (err) console.log(err);
        alert('File uploaded!');
      })
	}
	loadImage = (e) =>{
		axios.get(`http://localhost:8080/upload/sign-s3?file-name=${this.state.selectedFile.name}&file-type=${this.state.selectedFile.type}`)
		.then(res=>{console.log(res.data.url),this.setState({
			image:res.data.url
		})})
	}
	onDrop = (files) => {
      upload.post('http://localhost:8080/upload')
      .attach("image", files[0])
      .end((err, res) => {
        if (err) console.log(err);
        alert('File uploaded!');
      })
    }
	render() {
		return (
			<div>
				<input type="file" onChange={this.fileSelectedHandler}/>
				<button onClick={this.fileUploadHandler}>UpLoad</button>
				<button onClick={this.loadImage}>Load</button>
			<Dropzone onDrop={this.onDrop}>
              <div>Try dropping a file here, or click to select a file to upload.</div>
            </Dropzone>
            <img src={this.state.image} alt="img" />
			</div>
		);
	}
}
export default connect(null, { Upload })(UpLoad)