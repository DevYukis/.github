# ⚡ Guia Rápido - 5 Minutos

## 🎯 Objetivo

Ter um perfil GitHub **profissional e automatizado** rodando em 5 minutos!

## ✅ Checklist Rápida

### 1️⃣ Criar Repositório (1 min)

```bash
# No GitHub:
# 1. Clique em "+" → "New repository"
# 2. Nome: SEU_USERNAME (igual ao seu username!)
# 3. ✅ Public
# 4. ✅ Add README
# 5. Create repository
```

### 2️⃣ Clonar e Adicionar Arquivos (2 min)

```powershell
# Clone o repositório
git clone https://github.com/SEU_USERNAME/SEU_USERNAME.git
cd SEU_USERNAME

# Copie todos os arquivos desta pasta para lá
# Ou faça upload direto no GitHub
```

### 3️⃣ Personalização Mínima (1 min)

Edite **README.md** e substitua:
- `SEU_USERNAME` → seu username
- `SEU_NOME` → seu nome
- Links de redes sociais

### 4️⃣ Commit e Push (30 seg)

```powershell
git add .
git commit -m "feat: setup advanced github profile"
git push
```

### 5️⃣ Verificar Perfil (30 seg)

Acesse: `https://github.com/SEU_USERNAME`

**PRONTO! 🎉**

---

## 🚀 Configurações Opcionais (mas recomendadas)

### WakaTime (5 min) - Stats de Código

1. Crie conta em [wakatime.com](https://wakatime.com/)
2. Instale extensão no VS Code
3. Copie sua API Key
4. No GitHub: `Settings → Secrets → New secret`
   - Nome: `WAKATIME_API_KEY`
   - Valor: sua key
5. Edite README.md, adicione:
```markdown
<!--START_SECTION:waka-->
<!--END_SECTION:waka-->
```

### GitHub Actions (Já está configurado! ✅)

Apenas verifique em:
`Seu Repo → Actions → Enable workflows`

### Secrets para Features Avançadas

```bash
Settings → Secrets and variables → Actions → New repository secret
```

**Opcionais:**
- `PAT_TOKEN` - Para auto-merge e updates
- `CODECOV_TOKEN` - Para coverage
- `SNYK_TOKEN` - Para security scan
- `NPM_TOKEN` - Para publish automático
- `DISCORD_WEBHOOK` - Para notificações

---

## 📝 Customizações Rápidas

### Mudar Cores do Tema

```markdown
# No README.md, procure por:
theme=tokyonight

# Substitua por:
theme=dracula
theme=radical
theme=merko
theme=gruvbox
theme=vue
```

### Adicionar Mais Badges

```markdown
![Badge](https://img.shields.io/badge/TEXTO-VALOR-COLOR?style=for-the-badge&logo=ICON)
```

Exemplos:
```markdown
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Docker](https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
```

### Adicionar Seu Projeto em Destaque

```markdown
[![Repo Card](https://github-readme-stats.vercel.app/api/pin/?username=SEU_USERNAME&repo=NOME_DO_REPO&theme=tokyonight)](https://github.com/SEU_USERNAME/NOME_DO_REPO)
```

---

## 🐛 Problemas Comuns

### "Workflow não está rodando"

✅ Solução:
1. Vá em `Actions` no repo
2. Clique em "I understand my workflows, go ahead and enable them"

### "Estatísticas não aparecem"

✅ Solução:
- Aguarde 5-10 minutos
- Limpe cache do navegador
- Verifique se o username está correto

### "Erro ao fazer push"

✅ Solução:
```powershell
git config user.name "Seu Nome"
git config user.email "seu-email@example.com"
```

---

## 🎨 Inspiração

Perfis incríveis para se inspirar:
- [github.com/anuraghazra](https://github.com/anuraghazra)
- [github.com/abhisheknaiidu](https://github.com/abhisheknaiidu)
- [github.com/DenverCoder1](https://github.com/DenverCoder1)

---

## 📚 Próximos Passos

1. ⭐ **Adicione mais projetos** aos seus pinned repos
2. 📝 **Escreva issues** em projetos open source
3. 🔀 **Contribua com PRs** em outros projetos
4. 📊 **Monitore suas stats** semanalmente
5. 🎨 **Customize mais** o perfil aos poucos

---

## 💡 Dicas Pro

### 1. Atualize Regularmente
```powershell
# Toda semana, faça:
git pull
# Adicione novos projetos ao README
git add .
git commit -m "docs: update profile with new projects"
git push
```

### 2. Use Conventional Commits
```
feat: nova funcionalidade
fix: correção de bug
docs: atualização de docs
style: formatação
refactor: refatoração
test: testes
chore: manutenção
```

### 3. Engajamento
- Responda issues
- Faça code reviews
- Participe de discussões
- Compartilhe conhecimento

---

## 🎉 Conclusão

Você agora tem um perfil GitHub **HYPER AVANÇADO** com:

✅ Estatísticas dinâmicas  
✅ Automações completas  
✅ Templates profissionais  
✅ CI/CD configurado  
✅ Documentação completa  
✅ Segurança avançada  

**Parabéns! 🚀**

---

<div align="center">

### 🌟 Divirta-se codando! 🌟

[![Made with ❤️](https://img.shields.io/badge/Made%20with-%E2%9D%A4%EF%B8%8F-red?style=for-the-badge)](https://github.com/SEU_USERNAME)

**Dúvidas?** Abra uma [issue](https://github.com/SEU_USERNAME/SEU_USERNAME/issues) ou [discussion](https://github.com/SEU_USERNAME/SEU_USERNAME/discussions)!

</div>
