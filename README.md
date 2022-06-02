# Custom Js Alerts

**CONFIGURATION**

**1. title** <br>

**Type**: string <br>
**Default**: "" (empty string) <br>
**Description**: can be used to set the title of the alert message popup <br>

**Example:** <br>
cstmAlert({ <br>
 title:'Success' <br>
}); <br> <br>

**2. desc** <br>

**Type**: string <br>
**Default**: "" (empty string) <br>
**Description**: can be used to set the description of the alert message popup <br>

**Example:** <br>
cstmAlert({ <br>
 desc:'Transaction successfully done!' <br>
}); <br> <br>

**3. alertCls** <br>

**Type**: string <br>
**Default**: "success", "warning", "error" <br>
**Description**: can be used to set the class of the alert message popup according to the scenario. Use from the above options only. <br>

**Example:** <br>
cstmAlert({ <br>
 alertCls:'success' <br>
}); <br> <br>

**Example with all the 3 options:** <br>
cstmAlert({**title**:'Success', **desc**:'Transaction successfully done!', **alertCls**:'success'}); <br>
