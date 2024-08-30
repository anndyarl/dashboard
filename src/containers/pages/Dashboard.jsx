import Layout from "hocs/layout/Layout"
import { connect } from "react-redux"

function Dashboard(){   
    
    return(
        <Layout>
            Dashboard
        </Layout>
    )
}
const mapStateprops=state=>({

})

export default connect(mapStateprops,{

})(Dashboard)