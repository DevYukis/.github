require('dotenv').config();
const fs = require('fs');
const axios = require('axios');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'DevYukis';

async function getGitHubStats() {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${GITHUB_USERNAME}`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );

    return {
      name: response.data.name,
      followers: response.data.followers,
      following: response.data.following,
      publicRepos: response.data.public_repos,
      createdAt: response.data.created_at,
    };
  } catch (error) {
    console.error('Erro ao buscar estatísticas do GitHub:', error.message);
    return null;
  }
}

async function getRecentRepos() {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=5`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );

    return response.data.map((repo) => ({
      name: repo.name,
      description: repo.description,
      stars: repo.stargazers_count,
      url: repo.html_url,
      language: repo.language,
    }));
  } catch (error) {
    console.error('Erro ao buscar repositórios:', error.message);
    return [];
  }
}

async function updateReadme() {
  console.log('📊 Atualizando estatísticas...');

  const stats = await getGitHubStats();
  const repos = await getRecentRepos();

  if (!stats) {
    console.error('❌ Não foi possível obter as estatísticas');
    return;
  }

  console.log('✅ Estatísticas obtidas:');
  console.log(`   - Seguidores: ${stats.followers}`);
  console.log(`   - Repositórios públicos: ${stats.publicRepos}`);
  console.log(`   - Repositórios recentes: ${repos.length}`);

  // Aqui você pode adicionar lógica para atualizar o README.md
  // Por exemplo, substituir seções específicas com os dados obtidos

  console.log('✨ Atualização concluída!');
}

// Executar se chamado diretamente
if (require.main === module) {
  updateReadme();
}

module.exports = { getGitHubStats, getRecentRepos, updateReadme };
