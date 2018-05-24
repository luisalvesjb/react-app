import React, { Component } from 'react'
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css'


import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './../actions/Produtos'



class Produtos extends Component{

    constructor(props){
        super(props);

        this.state = {
            produtoslocal: [],
            visible: false,
        }

        

    }

    componentDidMount(){

        this.props.getAll()
        
        setTimeout(() =>{

            this.setState({
                produtoslocal: this.state.produtos
            })

            console.log(this.state);
        }, 1500)
        

        
        
        // api.all().then( (res) => {
        //     this.setState({
        //        // produtos: res.data.data
        //     })
        // })
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
            <div className="row">
                    <div className="col-12">
                        <div className="card mb-4">
                            <div className="card-block">
                                <h3 className="card-title">Editar Produto</h3>
    
    
                                <form className="form" action="#">
    
                                    <div className="form-group row">
                                        <label className="col-md-3 col-form-label">Default input field</label>
                                        <div className="col-md-9">
                                            <input type="text" name="regular" className="form-control" />
                                        </div>
                                    </div>
    
                                </form>
    
    
                            </div>
                        </div>
                    </div>
                </div>
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
                                this.state.produtoslocal.map( (produto, index) => (
                                
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
                            ))}
                            
                            
                        </tbody>
                    </table>
                </div>

            </section>

        )
    }

}

const mapStateToProps = state => ({
    produtos: state.produtos
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(Produtos)