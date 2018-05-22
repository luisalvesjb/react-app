import React, { Component } from 'react'
import { Modal, Button } from 'antd';
import axios from 'axios'

class Produtos extends Component{

    constructor(props){
        super(props);

        this.state = {
            produtos: [],
            visible: false
        }

    }

    componentDidMount(){
        
        axios.get('http://localhost:8000/produtos').then((res) => {
            this.setState({
                produtos: res.data.data
            })
        })
    }


    showModal = (id) => {
        console.log(id);
        this.setState({
          visible: true,
        });
      }
    
      handleOk = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
    
      handleCancel = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }

    render(){
        return(

            <section>

                <Modal
                    title="Editar Produto"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>

                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Produto</th>
                                <th>Preço</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                this.state.produtos.map( (produto, index) => { return(
                                
                                <tr key={index}>
                                    <td>{produto.id}</td>
                                    <td>{produto.titulo}</td>
                                    <td>{produto.preco}</td>
                                    <td>
                                        <Button type="primary" onClick={(e) => this.showModal(produto.id)}>
                                            Editar
                                        </Button>
                                    </td>
                                </tr>
                                )

                            })}
                            
                        </tbody>
                    </table>
                </div>

            </section>

        )
    }

}

export default Produtos
