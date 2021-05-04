import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const Email=()=>{ 
    var output=[]
    output.push(<p></p>)
    output.push(<TextField id="account" label="Email Address*" variant="outlined" />)
    output.push(<p></p>)
    output.push(<TextField id="pass" label="Password*" type="password"variant="outlined" />)
    output.push(<p></p>) 
    output.push(<Button variant="contained" color="primary">Sign In</Button>)

return output;
};
export default Email;