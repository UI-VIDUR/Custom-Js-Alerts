# Custom Js Alerts

**CONFIGURATION**

**1. title**

**Type**: string
**Default**: "" (empty string)
**Description**: can be used to set the title of the alert message popup

**Example:**
cstmAlert({
 title:'Success'
});

**2. desc**

**Type**: string
**Default**: "" (empty string)
**Description**: can be used to set the description of the alert message popup

**Example:**
cstmAlert({
 desc:'Transaction successfully done!'
});

**3. alertCls**

**Type**: string
**Default**: "success", "warning", "error"
**Description**: can be used to set the class of the alert message popup according to the scenario. Use from the above options only.

**Example:**
cstmAlert({
 alertCls:'success'
});

**Example with all the 3 options:**
cstmAlert({**title**:'Success', **desc**:'Transaction successfully done!', **alertCls**:'success'});
