import Layout from "hocs/layout/Layout"
import { connect } from "react-redux"

function Home(){   

    return(
        <Layout>
            Home
        </Layout>
    )
}
const mapStateprops=state=>({

})

export default connect(mapStateprops,{

})(Home)