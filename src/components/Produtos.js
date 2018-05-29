import React, { Component } from 'react'
import { Modal, Button, Spin, Icon  } from 'antd';
import 'antd/dist/antd.css'


import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './../actions/Produtos'



class Produtos extends Component{

    constructor(props){
        super(props);

        this.state = {
            visible: false,
            produtoEmAlteracao: [],
            loading: false
        }
    }

    componentDidMount(){

        this.handleLoading()
        this.props.thunkProdutos()
    }

    componentWillReceiveProps(){
        this.setState ({
            loading: this.props.produtoEmAlteracao == undefined ? true : false
        })
    }

    handleLoading(loading = true){
        this.setState({ loading })
    }

    showModal = (id) => {

        this.handleLoading()

        this.props.findProduto(id)

        console.log(this.refs)
        setTimeout(() => {
            this.setState({
                visible: true,
                produtoEmAlteracao: this.props.produtoEmAlteracao
            });
            console.log(this.props.produtoEmAlteracao)
           this.handleLoading(false)
        }, 1000)
        
    }
    
    handleOk = (e) => {
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }


    handleChange = (e, {name, value}) => {

        let prod = this.state.produtoEmAlteracao;
        prod[name] = value;
        this.setState({ produtoEmAlteracao: prod });

    }


    render(){

        
        const loaderIcon = <Icon type="loading" style={{ fontSize: 54 }} spin />

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
    
    
                                <form className="form" action="#" ref="form">
                                    <div className="form-group row">
                                        <label className="col-md-3 col-form-label">Produto</label>
                                        <div className="col-md-9">
                                            <input type="text" 
                                            onChange={(e) => this.handleChange(e, e.target)}
                                            defaultValue={this.state.produtoEmAlteracao.titulo} name="titulo" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-md-3 col-form-label">Preço</label>
                                        <div className="col-md-9">
                                            <input type="text" defaultValue={this.state.produtoEmAlteracao.preco} name="preco" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-md-3 col-form-label">Descrição</label>
                                        <div className="col-md-9">
                                            <textarea name="descricao" defaultValue={this.state.produtoEmAlteracao.descricao} className="form-control" ></textarea>
                                        </div>
                                    </div>
    
                                </form>
    
    
                            </div>
                        </div>
                    </div>
                </div>
        </Modal>
    
        <Spin spinning={this.state.loading} indicator={loaderIcon}>
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
                            this.props.produtos.map( (produto, index) => (

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
                            ))
                        }
                            
                        </tbody>
                    </table>
                </div>
            </Spin>
            </section>

        )
    }

}

const mapStateToProps = state => ({
    produtos: state.produtos,
    produtoEmAlteracao: state.produtoEmAlteracao
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Produtos)