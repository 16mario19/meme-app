import React,{Component} from "react"
class MemeGenerator extends Component{
    constructor (){
        super()
        this.state={
            topText:"",
            bottomText:"",
            randomImg:"http://i.imgflip.com/1bij.jpg",
            allMemeImgs:[],
        }
    }

    render(){
        return(
            <div>
                <form>
                    <input
                    type="text"
                    placeholder="Top Text"
                    name="top Text"
                    value
                    />
                    <input
                    type="text"
                    placeholder="Top Text"
                    name="top Text"
                    value
                    />

                </form>
                <div>
                    <img alt=""/>
        <h2>{}</h2>
        <h2>{}</h2>

                </div>
            </div>
        );
    }
}