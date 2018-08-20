class LocationsList extends React.Component {
  render() {
    return (
      <table>
        <tbody>
        {this.props.locations.map((location, index)=> {
          return (
            <tr>
            <td onClick={()=> { this.props.getLocation(location); this.props.toggleState('locationsListIsVisible', 'locationIsVisible')}}>
            {location.name}
            </td>
            <td>
            {location.address}, {location.city}, {location.state}
            </td>
            </tr>
          )
        })}
       </tbody>
      </table>
    )
  }
}
