import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import styled from 'styled-components';

const ProductContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background: #f8f9fa;
`;

const Header = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderContent = styled.div`
  h1 {
    color: #333;
    margin-bottom: 0.5rem;
    font-size: 2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }
  
  p {
    color: #666;
    font-size: 1.1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
`;

const LogoutButton = styled.button`
  padding: 12px 24px;
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #c82333;
    transform: translateY(-2px);
  }
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  color: #555;
  margin-bottom: 0.5rem;
  font-size: 14px;
`;

const Input = styled.input`
  padding: 12px 16px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  background: #f8f9fa;
  font-family: 'Poppins', sans-serif;

  &:focus {
    border-color: #667eea;
    background: white;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const Textarea = styled.textarea`
  padding: 12px 16px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  background: #f8f9fa;
  font-family: 'Poppins', sans-serif;
  resize: vertical;
  min-height: 100px;

  &:focus {
    border-color: #667eea;
    background: white;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const ImagePreview = styled.div`
  width: 100%;
  height: 200px;
  border: 2px dashed #e1e5e9;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  overflow: hidden;
  position: relative;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

const ImagePlaceholder = styled.div`
  text-align: center;
  color: #666;
  
  svg {
    width: 48px;
    height: 48px;
    margin-bottom: 1rem;
    opacity: 0.5;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const FileInputLabel = styled.label`
  display: inline-block;
  padding: 12px 24px;
  background: #667eea;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    background: #5a6fd8;
    transform: translateY(-2px);
  }
`;

const SubmitButton = styled.button`
  padding: 16px 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const Message = styled.div`
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 500;
`;

const SuccessMessage = styled(Message)`
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
`;

const ErrorMessage = styled(Message)`
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
`;

const ProductRegistration = () => {
  const { logout, user } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    points: '',
    price: '',
    image: null
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file
      }));
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      // Validação
      if (!formData.name || !formData.description || !formData.points || !formData.price) {
        setMessage({ type: 'error', text: 'Por favor, preencha todos os campos obrigatórios' });
        return;
      }

      if (formData.points < 0 || formData.price < 0) {
        setMessage({ type: 'error', text: 'Pontos e valor devem ser números positivos' });
        return;
      }

      // Simulação de envio para API
      await new Promise(resolve => setTimeout(resolve, 1500));

      setMessage({ 
        type: 'success', 
        text: 'Produto cadastrado com sucesso!' 
      });

      // Limpar formulário
      setFormData({
        name: '',
        description: '',
        points: '',
        price: '',
        image: null
      });
      setImagePreview(null);

    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: 'Erro ao cadastrar produto. Tente novamente.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <ProductContainer>
      <Header>
        <HeaderContent>
          <h1>Cadastro de Produtos</h1>
          <p>Bem-vindo, {user?.email}</p>
        </HeaderContent>
        <LogoutButton onClick={handleLogout}>
          Sair
        </LogoutButton>
      </Header>

      <ProductCard>
        <Form onSubmit={handleSubmit}>
          {message.text && (
            message.type === 'success' ? 
              <SuccessMessage>{message.text}</SuccessMessage> : 
              <ErrorMessage>{message.text}</ErrorMessage>
          )}

          <FormRow>
            <FormGroup>
              <Label htmlFor="name">Nome do Produto *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Digite o nome do produto"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="points">Pontos *</Label>
              <Input
                id="points"
                name="points"
                type="number"
                min="0"
                value={formData.points}
                onChange={handleInputChange}
                placeholder="0"
                required
              />
            </FormGroup>
          </FormRow>

          <FormGroup>
            <Label htmlFor="description">Descrição *</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Descreva o produto..."
              required
            />
          </FormGroup>

          <FormRow>
            <FormGroup>
              <Label htmlFor="price">Valor do Produto (R$) *</Label>
              <Input
                id="price"
                name="price"
                type="number"
                min="0"
                step="0.01"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="0.00"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Imagem do Produto</Label>
              <ImagePreview>
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" />
                ) : (
                  <ImagePlaceholder>
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <p>Nenhuma imagem selecionada</p>
                  </ImagePlaceholder>
                )}
              </ImagePreview>
              <FileInput
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              <FileInputLabel htmlFor="image">
                Selecionar Imagem
              </FileInputLabel>
            </FormGroup>
          </FormRow>

          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? 'Cadastrando...' : 'Cadastrar Produto'}
          </SubmitButton>
        </Form>
      </ProductCard>
    </ProductContainer>
  );
};

export default ProductRegistration; 