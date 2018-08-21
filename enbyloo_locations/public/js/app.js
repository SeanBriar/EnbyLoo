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
  }

  toggleState(st1, st2){
    this.setState(
      {
        [st1]: !this.state[st1],
        [st2]: !this.state[st2]
      })
  }

  // to show one location
  getLocation(location) {
    this.setState(
      {
        location: location
      })
  }

  handleCreate(location){
    console.log([location, ...this.state.location])
    this.setState(
      {
        locations: [location, ...this.state.location]
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
       <h5>Non-Binary Restrooms</h5>
       <div class="add nav">
         {this.state.locationsListIsVisible ? <button onClick={()=>this.toggleState('addLocationIsVisible', 'locationsListIsVisible')}>Add a Location</button> : ''}
       </div>

       {this.state.locationsListIsVisible ?
         <LocationsList
          toggleState={this.toggleState}
          locations={this.state.locations}
          getLocation={this.getLocation} />
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
         deleteLocation={this.deleteLocation} />
        : ''}

      </div>
    )
  }
}


ReactDOM.render(
  <Locations />,
  document.querySelector('.locations')
)
