import React from 'react'
import Artist from '../Artist/Artist'
import Track from '../Track/Track'


class SearchVibes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: '',
            artists: [],
            tracks: [],
            view: 'artists'
        }
    }
    updateKeyword(keyword) {
        this.setState({keyword})
    }
    handleSearch(event) {
        event.preventDefault()
        const keyword = this.state.keyword
    }
    addArtist(name, id, img) {
        const artists = this.state.artists.filter(artist => {
            return artist.id !== id})
        console.log(id)
        this.setState({artists})
    }
    addTrack(name, id, img, artist, album) {
        const tracks = this.state.tracks.filter(track => track.id !== id)

        this.setState({tracks})
    }
    clickView(type) {
        this.setState({view: type})
    }
    renderView() {
        const artists = this.state.artists.map((artist, index) => {
            const { name, id, images } = artist
            const img = images.length > 0 ? images[0].url : 'https://www.placecage.com/280/280'
            return <Artist 
                key={index} 
                name={name} 
                img={img}
                id={artist.id}
                message='Save'
                handleClick={() => this.addArtist(name, id, img)}
                />
        })
        const tracks = this.state.tracks.map((track, index) => {
            const { name, images, id, artist, album } = track
            const img = images.length > 0 ? images[0].url : 'https://www.placecage.com/300/300'
            return <Track
                key={index}
                name={name}
                img={img}
                id={id}
                artist={artist}
                album={album}
                message='Save'
                handleClick={() => this.addTrack(name, id, img, artist, album)}
            />
        })
        return this.state.view === 'artists' ?
            <div className='vibes-list'>
                {artists}
            </div>
            :
            <div className='vibes-list'>
                {tracks}
            </div>
    }
    render() {
        return (
            <section className='search-vibes'>
                <form className='add-vibe' onSubmit={event => this.handleSearch(event)}>
                    <label htmlFor='vibe'>Want Facejams based on music you like? <br/>Save your artist/track preferences here.</label>
                    <br/>
                    <input 
                        id='vibe'
                        name='vibe' 
                        type='text' 
                        placeholder='Find your favorite songs or artists'
                        onChange={event => this.updateKeyword(event.target.value)}/>
                    <button>Search</button>
                </form>
                <nav className='seed-toggle'>
                    <ul>
                        <li><button onClick={() => this.clickView('artists')}>Artists</button></li>
                        <li><button onClick={() => this.clickView('tracks')}>Tracks</button></li>
                    </ul>
                </nav>
                {this.renderView()}
            </section>
        )
    }
}

export default SearchVibes