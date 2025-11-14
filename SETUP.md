# 🚀 Perfil GitHub Hyper Avançado

Este é um template completo para criar um perfil GitHub profissional e automatizado com atualizações dinâmicas!

## ✨ Recursos

- 📊 **Estatísticas em Tempo Real**: GitHub Stats, linguagens mais usadas, streak de commits
- 🤖 **Automação com GitHub Actions**: Atualização automática a cada 6 horas
- 🎯 **Projetos em Destaque**: Cards interativos dos seus melhores repositórios
- 📈 **Atividades Recentes**: Lista automática das suas últimas ações no GitHub
- ⏱️ **Integração WakaTime**: Tempo de codificação e linguagens (opcional)
- 🎨 **Design Moderno**: Tema escuro com cores personalizadas
- 📱 **Responsivo**: Funciona perfeitamente em todos os dispositivos

## 🛠️ Como Configurar

### 1. Criar o Repositório no GitHub

1. Crie um novo repositório no GitHub com o **mesmo nome do seu usuário**
   - Exemplo: Se seu username é `johndoe`, crie um repo chamado `johndoe`
2. Marque como **Público**
3. Adicione um README.md (pode ser vazio por enquanto)

### 2. Personalizar o README.md

1. Abra o arquivo `README.md` neste projeto
2. Substitua `SEU_USERNAME` pelo seu username do GitHub (em todos os lugares)
3. Substitua `REPO_NAME` pelos nomes dos seus repositórios favoritos
4. Atualize seus links de redes sociais
5. Adicione/remova badges de tecnologias que você usa

### 3. Configurar GitHub Actions

#### Passo 1: Copiar os arquivos
Copie toda a pasta `.github/workflows/` para o seu repositório no GitHub.

#### Passo 2: Configurar Secrets (Opcional para WakaTime)
Se quiser usar o WakaTime:
1. Crie uma conta em [WakaTime](https://wakatime.com/)
2. Vá em Settings → Repositories → Secrets and variables → Actions
3. Adicione um novo secret chamado `WAKATIME_API_KEY`
4. Cole sua API key do WakaTime

### 4. Adicionar Seção de Atividades (Opcional)

Para que a seção `<!--START_SECTION:activity-->` funcione:
1. Certifique-se que o workflow `update-activity.yml` está no repositório
2. O GitHub Actions vai atualizar automaticamente

### 5. Scripts Locais (Opcional)

Se quiser rodar scripts locais:

```bash
# Instalar dependências
npm install

# Copiar arquivo de ambiente
cp .env.example .env

# Editar .env com suas credenciais
# GITHUB_TOKEN: Crie em Settings → Developer settings → Personal access tokens
# GITHUB_USERNAME: Seu username do GitHub

# Rodar script de atualização
npm run update
```

## 📋 Estrutura do Projeto

```
.
├── .github/
│   └── workflows/           # GitHub Actions
│       ├── update-activity.yml
│       └── update-wakatime.yml
├── scripts/
│   ├── update-stats.js     # Script Node.js para stats
│   └── fetch-data.py       # Script Python para dados
├── assets/                  # Imagens e recursos (crie se necessário)
├── README.md               # Seu perfil!
├── package.json
├── .env.example
├── .gitignore
└── SETUP.md               # Este arquivo
```

## 🎨 Personalizações

### Temas Disponíveis

Você pode mudar o tema das estatísticas alterando `theme=` nas URLs:
- `tokyonight` (atual)
- `radical`
- `merko`
- `gruvbox`
- `dracula`
- `monokai`
- `vue`
- `dark`

Exemplo:
```markdown
![GitHub Stats](https://github-readme-stats.vercel.app/api?username=SEU_USERNAME&theme=radical)
```

### Adicionar Mais Badges

Visite [Shields.io](https://shields.io/) para criar badges personalizadas.

### Adicionar Gráficos de Commits

```markdown
![GitHub Activity Graph](https://github-readme-activity-graph.vercel.app/graph?username=SEU_USERNAME&theme=tokyo-night)
```

## 🔧 Troubleshooting

### GitHub Actions não está rodando?
- Verifique se o repositório é público
- Confirme que os workflows estão na pasta `.github/workflows/`
- Vá em Actions no GitHub e habilite workflows se necessário

### Estatísticas não aparecem?
- Verifique se substituiu `SEU_USERNAME` corretamente
- Aguarde alguns minutos para as APIs carregarem
- Verifique se seu perfil é público

### WakaTime não funciona?
- Confirme que adicionou o secret `WAKATIME_API_KEY`
- Instale a extensão WakaTime no seu editor
- Aguarde pelo menos 1 dia de codificação para ter dados

## 📚 Recursos Úteis

- [GitHub README Stats](https://github.com/anuraghazra/github-readme-stats)
- [GitHub Activity README](https://github.com/jamesgeorge007/github-activity-readme)
- [WakaTime README](https://github.com/athul/waka-readme)
- [Shields.io](https://shields.io/)
- [Typing SVG](https://github.com/DenverCoder1/readme-typing-svg)

## 🚀 Próximos Passos

1. ⭐ Substitua `SEU_USERNAME` no README.md
2. 🎨 Personalize cores e badges
3. 📤 Faça commit e push para o GitHub
4. 🎉 Visite seu perfil e veja a mágica acontecer!

## 💡 Dicas Pro

- Use o [Typing SVG Generator](https://readme-typing-svg.demolab.com/) para criar animações personalizadas
- Adicione GIFs personalizados na pasta `assets/`
- Crie badges customizadas para seus projetos
- Use emojis para deixar mais divertido! 🎉

---

**Importante**: Lembre-se de manter suas credenciais (tokens, API keys) no arquivo `.env` e **nunca** fazer commit delas!

Boa sorte com seu perfil incrível! 🚀✨
