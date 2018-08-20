class Location extends React.Component {
  render() {
    return (
      <div className='locationShow'>
        <button>See Full List</button>
        <div className='indivLocation'>
          <p>Location Name:</p>
          <p>Adress, City, State:</p>
          <p>Cleanliness Rating:</p>
          <p>Friendliness Rating:</p>
        </div>
        <div className='editBtn'>
          <button>Edit</button>
        </div>
        <div className='deleteBtn'>
          <button>Delete</button>
        </div>
        <LocationsForm />
      </div>
    )
  }
}
