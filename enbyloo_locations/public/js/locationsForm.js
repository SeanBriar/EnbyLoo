class LocationsForm extends React.Component {
  render() {
    return (
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
            <input id="name" type="text" class="validate" />
            <label for="name">Name</label>
          </div>
          <div class="input-field col s6">
            <input id="address" type="text" class="validate" />
            <label for="address">Address</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s6">
            <input id="city" type="text" class="validate" />
            <label for="city">City</label>
          </div>
          <div class="input-field col s6">
            <input id="state" type="text" class="validate" />
            <label for="state">State (i.e. CA)</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s6">
            <input id="cleanliness" type="text" class="validate" />
            <label for="cleanliness">Cleanliness (1-5)</label>
          </div>
       <div class="input-field col s6">
         <input id="friendliness" type="text" class="validate" />
         <label for="friendliness">Friendliness (1-5)</label>
       </div>
     </div>
   </form>
 </div>
    )
  }
}
