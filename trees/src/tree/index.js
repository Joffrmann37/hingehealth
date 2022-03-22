import React, {useState, useEffect, Component} from 'react';
import './index.css'
import axios from 'axios'
import data from './data.json'
import { TextInput, StyleSheet} from 'react-native'
import { render } from 'react-dom';
  
class Tree extends Component {
    constructor() {
        super();
        this.state = {
            dataArr: data.animals
        };
    }

    filteredArrByValue(val) {
        const filteredArr = data.animals.filter(obj => {
            return obj.value == val
        })

        return filteredArr.length > 0 ? filteredArr[0] : ""
    }

    filteredArrByNode(node) {
        const filteredArr = data.animals.filter(obj => {
            return obj.node == node
        })
        
        return filteredArr.length > 0 ? filteredArr : []
    }

    doesNodeExist(node) {
        const filteredArr = data.animals.filter(obj => {
            return obj.node == node
        })

        return filteredArr.length > 0
    }

    insertToAnimals(obj, newVal) {
        let data = this.state.dataArr
        let arrAtNode = this.filteredArrByNode(obj.node)
        const lastElementOfNode = arrAtNode[arrAtNode.length - 1]
        const lastElement = this.state.dataArr[this.state.dataArr.length - 1]
        const idx = obj == lastElement ? this.state.dataArr.indexOf(lastElementOfNode) : this.state.dataArr.indexOf(lastElementOfNode) + 1
        let nextElement = this.state.dataArr[idx]
        const nodeExists = this.doesNodeExist(nextElement.node)
        if (obj == lastElementOfNode && nodeExists == true) {
            this.handleInsertForNextNode(newVal, nextElement, arrAtNode)
            return
        }
        let newObj = {value: newVal, spacing: lastElementOfNode.spacing, node: lastElement.node, insertNode: lastElement.insertNode}
        data.splice(idx, 0, newObj)
        this.setState(data);
    }

    handleInsertForNextNode(newVal, nextElement, arrAtNode) {
        let data = this.state.dataArr
        let newObj = {value: newVal, spacing: nextElement.spacing, node: nextElement.node, insertNode: nextElement.insertNode}
        let arrAtNextNode = this.filteredArrByNode(nextElement.node)[this.filteredArrByNode(nextElement.node).length - 1]
        console.log(arrAtNextNode)
        console.log(nextElement.node)
        const lastElementOfNextNode = arrAtNextNode[arrAtNextNode - 1]
        const newIdx = arrAtNode.length > 1 ? this.state.dataArr.indexOf(lastElementOfNextNode) - 1 : this.state.dataArr.indexOf(lastElementOfNextNode)
        data.splice(newIdx, 0, newObj);
        this.setState(data)
    }
    
    render() {
        return (
            <div className="tree">
                {
                    this.state.dataArr.map(obj => 
                    (<div><span style={{ marginLeft: `${obj.spacing}rem`, flex: 1, justifyContent: 'flex-start'}} dangerouslySetInnerHTML={{ __html: obj.value}} />
                    <TextInput placeholder={`Add to ${this.filteredArrByNode(obj.node)[0].value} node`} style={styles.input}
                        onSubmitEditing={e => {
                            e.key === 'Enter' &&
                            this.insertToAnimals(obj, e.nativeEvent.text)
                            console.log(`New arr${obj.value}:`)
                        }}></TextInput><br></br></div>)
                    )
                }
            </div>
        );
    }
}

export default Tree;

const styles = StyleSheet.create({
input: {
    borderWidth: 1,
    borderColor: '#FF5E34',
    flex: 1,
    justifyContent: 'normal',
    borderRadius: 5,
    textAlign: 'center'
},
});