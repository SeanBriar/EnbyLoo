class Location extends React.Component {
  render() {
    return (
      <div className='locationShow'>
        <button onClick={()=> this.props.toggleState('locationsListIsVisible', 'locationIsVisible')}>See Full List</button>
        <div className='indivLocation'>
          <p>Name: {this.props.location.name}</p>
          <p>Adress, City, State: {this.props.location.address}, {this.props.location.city}, {this.props.location.state} </p>
          <p>Cleanliness Rating: {this.props.location.cleanliness}</p>
          <p>Friendliness Rating: {this.props.location.staff_friendliness}</p>
          <p>ADA Complacent: {this.props.location.ada}</p>
        </div>
        <div className='editBtn'>
          <button>Edit</button>
        </div>
        <div className='deleteBtn'>
          <button onClick={()=> this.props.deleteLocation(location, index)}>Delete</button>
        </div>
        <LocationsForm location={this.props.person} handleSubmit={this.props.handleSubmit} />
      </div>
    )
  }
}
