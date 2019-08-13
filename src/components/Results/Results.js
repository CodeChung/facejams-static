import React from 'react'
import Track from '../Track/Track';
import Donut from '../Donut/Donut'

class Results extends React.Component {
    constructor(props) {
        super(props)
        // maybe split up components
        this.state = {
            emotions: {},
            notes: '',
            tracks: [],
            chosenTrack: '',
            photo: '',
        }
    }
    componentDidMount() {
        const emotions = this.props.emotion
        const photo = this.props.photo
        this.setState({ emotions, photo })
    }
    updateNotes(notes) {
        this.setState({notes})
    }
    handleSubmit(event) {
        event.preventDefault()
        const results = [
            {
                "url": "https://open.spotify.com/track/0m3Ze0cy8qBHSsV2exAfCw",
                "id": "0m3Ze0cy8qBHSsV2exAfCw",
                "artist": "Kanye West",
                "album": "808s & Heartbreak",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/353e99e5ff167272c245412b52d84bc36185b58d",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/e813e06978f72b9c965957b1b9789e98e1b2458b",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/9eb5ba8c3b1f6877482bb9c3c59fb602c2d27b8a",
                        "width": 64
                    }
                ],
                "name": "Amazing"
            },
            {
                "url": "https://open.spotify.com/track/2Guz1b911CbpG8L92cnglI",
                "id": "2Guz1b911CbpG8L92cnglI",
                "artist": "The Red Jumpsuit Apparatus",
                "album": "Don't You Fake It",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/548908d2362b623aab6082f15229c9c842aeca28",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/095f419e80211337918a5adfe388215aad51afed",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/707f50c34dcf1f3ee808202267e675701624a78b",
                        "width": 64
                    }
                ],
                "name": "Your Guardian Angel"
            },
            {
                "url": "https://open.spotify.com/track/03XfngWwNfhEjrnEga73Rg",
                "id": "03XfngWwNfhEjrnEga73Rg",
                "artist": "Dreamville",
                "album": "Revenge Of The Dreamers III",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/252556031aa69d3a5bbeab84fbb2b5ea0429f8b9",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/be7ca2d4abb2c1b30bae57b9fa5ebd8c4146849d",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/de35dd1481efb2c6ab362c43272beb5836ff6a3b",
                        "width": 64
                    }
                ],
                "name": "Swivel (with EARTHGANG) - From The Upcoming Album \"Mirrorland\""
            },
            {
                "url": "https://open.spotify.com/track/6gSw5vz7dcafda23VqMrnl",
                "id": "6gSw5vz7dcafda23VqMrnl",
                "artist": "Kevin Abstract",
                "album": "American Boyfriend: A Suburban Love Story",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ade6313dfbf59562a5210f464b14b0eca026b85c",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/f9a1d3214f017569e2224fb69967af8c5ba0ffe0",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/b9c26bb99e986b5a0ae2bf7040fa6cac727b0dc1",
                        "width": 64
                    }
                ],
                "name": "Empty"
            },
            {
                "url": "https://open.spotify.com/track/6J7cSyvSCnPwv3vqHchEfL",
                "id": "6J7cSyvSCnPwv3vqHchEfL",
                "artist": "A Day To Remember",
                "album": "Homesick",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/0c15cbab6487c63f7fcb9fc4b485a8a4377687e1",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/8f565b89d44d691cb6e80da06af6515ab55a69a9",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/7930e4627bcb01097a9583aa7c6938ab7b97fa76",
                        "width": 64
                    }
                ],
                "name": "If It Means a Lot to You"
            }
        ]
        this.setState({
            tracks: results
        })
    }
    //if chosenTrack already filled, patch entry else set new chosen track and entry
    saveEntry(track) {
        const { notes, photo, emotions } = this.state
    }
    render() {
        const tracks = this.state.tracks.map((track, index) => {
            const { name, images, artist, album, url } = track
            const img = images.length > 0 ? images[0].url : 'https://www.placecage.com/280/280'
            return (
                <div className='recommendation-track' key={index}>
                    <a href={url} rel='noopener noreferrer' target='_blank'>
                        <Track 
                        name={name}
                        img={img}
                        artist={artist}
                        album={album}
                        message='Listen'/>
                    </a>
                    <button
                        onClick={() => console.log('cheese')}>
                        Save
                    </button>
                </div>
            )
        })
        return (
            <div className='emotion-graph'>
                <img src={this.state.photo} alt='journal face'/>
                <Donut
                    emotions={this.state.emotions}
                    background={this.state.photo}
                />
                <form onSubmit={event => this.handleSubmit(event)}>
                    <legend>Today's Highlights</legend>
                    <textarea 
                        placeholder='Today I...'
                        onChange={e => this.updateNotes(e.target.value)}
                        />
                    <br/>
                    <button>Find Track</button>
                </form>
                {this.state.tracks && <h3>Recommendations</h3>}
                <div className='recommendation-list'>
                    {tracks}
                </div>
            </div>
        )
    }
}

export default Results