class Locations extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      addLocationIsVisible: false,
      locationsListIsVisible: true,
      locationIsVisible: false,
      editLocationIsVisible: false,
      locations: []
    }
    this.toggleState = this.toggleState.bind(this)
  }

  toggleState(st1, st2){
    this.setState(
      {
        [st1]: !this.state[st1],
        [st2]: !this.state[st2]
      })
  }

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


  render() {
    return (
      <div className='locationsList'>
       <h5>Non-Binary Restrooms</h5>
       <div class="add nav">
         {this.state.locationsListIsVisible ? <button onClick={()=>this.toggleState('addLocationIsVisible', 'locationsListIsVisible')}>Add a Location</button> : ''}
       </div>

       {this.state.locationsListIsVisible? <LocationsList toggleState={this.toggleState} locations={this.state.locations}/> : ''}
       {this.state.addLocationIsVisible ? <LocationsForm toggleState={this.toggleState} /> : ''}
       {this.state.locationIsVisible ? <Location toggleState={this.toggleState} /> : ''}
      </div>
    )
  }
}


ReactDOM.render(
  <Locations />,
  document.querySelector('.locations')
)
