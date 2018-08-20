class Location extends React.Component {
  render() {
    return (
      <div className='locationShow'>
        <button onClick={()=> this.props.toggleState('locationsListIsVisible', 'locationIsVisible')}>See Full List</button>
        <div className='indivLocation'>
          <p>Name</p>
          <p>Adress, City, State</p>
          <p>Cleanliness Rating</p>
          <p>Friendliness Rating</p>
          <p>ADA Complacent</p>
        </div>
        <div className='editBtn'>
          <button>Edit</button>
        </div>
        <div className='deleteBtn'>
          <button>Delete</button>
        </div>
      </div>
    )
  }
}
