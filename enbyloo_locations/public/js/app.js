class Locations extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      addLocationIsVisible: false,
      locationsListIsVisible: true,
      locationIsVisible: false,
      editLocationIsVisible: false,
      locations: [],
      location: {}
    }
    this.toggleState = this.toggleState.bind(this)
    this.getLocation = this.getLocation.bind(this)
    this.deleteLocation = this.deleteLocation.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
  }


  toggleState(st1, st2){
    this.setState(
      {
        [st1]: !this.state[st1],
        [st2]: !this.state[st2]
      })
  }


// ============ Update =============
handleUpdateSubmit (location) {
    fetch('/locations/'+ location.id, {
      body: JSON.stringify(location),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(updatedLocation => {
        return updatedLocation.json()
      })
      .then(jsonedPerson => {
        //need to update state be naughty, call that db!
        this.getLocations()
        this.toggleState('locationsListIsVisible', 'locationIsVisible')
      })
      .catch(error => console.log(error))

}

// =========== Create =============
  handleCreate(location){
    console.log([location, ...this.state.locations])
    this.setState(
      {
        locations: [location, ...this.state.locations]
      })
  }

  handleCreateSubmit(location){
    console.log(location);
    fetch('/locations', {
      body: JSON.stringify(location),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdLocation => {
      return createdLocation.json()
    })
    .then(jsonedLocation => {
      this.handleCreate(jsonedLocation)
      this.toggleState('addLocationIsVisible', 'locationsListIsVisible')
    })
    .catch(error => console.log(error))
  }


// ============= Index/Show =============
  // to show one location
  getLocation(location) {
    this.setState(
      {
        location: location
      })
    }

  // get data from database
  getLocations() {
    fetch('/locations')
    .then(response => response.json())
    .then(data => {
      this.setState({
        locations: data
      })
    }).catch(error => console.log(error))
  }

  componentDidMount() {
    this.getLocations()
  }


// ============== Delete =================
  deleteLocation (location, index) {
  fetch('locations/' + locations.id,
    {
      method: 'DELETE'
    })
    .then(data => {
      this.setState({
        locations: [
          ...this.state.locations.slice(0, index),
          ...this.state.locations.slice(index + 1)
        ]
      })
    })
  }

  render() {
    return (
      <div className='locationsList'>
       <h5 className='listTitle'>Non-Binary Restrooms</h5>
       <div className='row addSearchRow'>

         <div className="searchBar">
           {this.state.locationsListIsVisible ? <div className="input-field col s6">
               <input
                 id="search"
                 type="text"
                 className="validate" />
                 <label for="search"> Search</label>
             </div> : ''}
         </div>
         <div className="add">
         {this.state.locationsListIsVisible ? <button className='addBtn' onClick={()=>this.toggleState('addLocationIsVisible', 'locationsListIsVisible')}>Add a Location</button> : ''}
         </div>
        </div>

       {this.state.locationsListIsVisible ?
         <LocationsList
          toggleState={this.toggleState}
          locations={this.state.locations}
          getLocation={this.getLocation}
          deleteLocation={this.deleteLocation} />
        : ''}

       {this.state.addLocationIsVisible ?
         <LocationsForm
         toggleState={this.toggleState}
         handleCreate={this.handleCreate}
         handleSubmit={this.handleCreateSubmit}/>
        : ''}

       {this.state.locationIsVisible ?
         <Location
         toggleState={this.toggleState}
         location={this.state.location}
         handleSubmit={this.handleUpdateSubmit}
         editLocationIsVisible={this.state.editLocationIsVisible}
         />
        : ''}

      </div>
    )
  }
}


ReactDOM.render(
  <Locations />,
  document.querySelector('.locations')
)
