import React from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import Results from '../../components/Results/Results'
import './HomePage.css'
import Entry from '../../components/Entry/Entry';
import AppContext from '../../AppContext';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: '',
            error: '',
            analyzedPhoto: '',
            emotion: {},
            entry: {},
            artistSeeds: [],
            trackSeeds: []
        }
    }
    onTakePhoto(dataUri) {
        this.setState({photo: dataUri})
    }
    //sets current key to the clicked photo and renders the image on main display
    onClickPhoto(imgKey) {
        this.setState({current: Number(imgKey)})
    }
    deletePhoto() {
        this.setState({
            photo: '',
            error: '',
        })

    }
    analyzePhoto() {
        const emotion = {
            anger: 0,
            contempt: 0,
            disgust: 0,
            surprise: 1
        }
        this.setState({
            error: '',
            emotion,
            analyzedPhoto: "http://res.cloudinary.com/dsxx6cuel/image/upload/v1565676670/a3dmcn59k1znzx5euzbf.png"
        })
    }
    //either display webcam or the photo that was taken
    renderPhotoDisplay() {
        const { artists, tracks } = this.context
        const photo = this.state.photo
        if (artists.length === 0 && tracks.length === 0) {
            return <div className='warning'><h3>Please add seeds in Preferences tab before starting</h3></div>
        } else {
            return !photo ?
            <div className='photo-booth'>
                <Camera
                onTakePhoto={(dataUri) => this.onTakePhoto(dataUri)}
                />
            </div>
            :
            <div className='current-img'>
                <div className='hidden'/>
                <img
                    width={768}
                    src={photo}
                    alt='current'/>
                <button className='analyze-img' onClick={() => this.analyzePhoto()}>Analyze</button>
                <button className='delete-img' onClick={() => this.deletePhoto()}>Delete</button>
            </div>
        }
    }
    renderView(context) {
        if (Object.keys({}) > 0) {
            return <Entry />
        } else {
            return Object.keys(this.state.emotion).length > 0 ?
            <Results 
                emotion={this.state.emotion} 
                photo={this.state.analyzedPhoto}
                />
            :
            <div className="camera">
                <h2>Mood</h2>
                {this.renderPhotoDisplay()}
            </div>
        }
    }
    render() {
        const context = this.context
        return (
            <section className='camera-page'>
                {this.renderView(context)}
            </section>
            
        )
    }
}

HomePage.contextType = AppContext

export default HomePage