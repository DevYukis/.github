#!/usr/bin/env python3
import os
import requests
from datetime import datetime

GITHUB_TOKEN = os.getenv('GITHUB_TOKEN')
GITHUB_USERNAME = os.getenv('GITHUB_USERNAME', 'DevYukis')

def get_contribution_data():
    """Busca dados de contribuições do GitHub"""
    headers = {
        'Authorization': f'token {GITHUB_TOKEN}',
        'Accept': 'application/vnd.github.v3+json'
    }
    
    url = f'https://api.github.com/users/{GITHUB_USERNAME}/events/public'
    
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f'❌ Erro ao buscar contribuições: {e}')
        return []

def analyze_contributions(events):
    """Analisa as contribuições e retorna estatísticas"""
    stats = {
        'total_events': len(events),
        'push_events': 0,
        'pr_events': 0,
        'issue_events': 0,
        'languages': set()
    }
    
    for event in events:
        event_type = event.get('type', '')
        
        if event_type == 'PushEvent':
            stats['push_events'] += 1
        elif event_type == 'PullRequestEvent':
            stats['pr_events'] += 1
        elif event_type == 'IssuesEvent':
            stats['issue_events'] += 1
            
        # Coleta linguagens dos repositórios
        repo = event.get('repo', {})
        if repo:
            stats['languages'].add(repo.get('name', '').split('/')[-1])
    
    stats['languages'] = list(stats['languages'])
    return stats

def generate_report():
    """Gera relatório de atividades"""
    print('📊 Gerando relatório de atividades...')
    
    events = get_contribution_data()
    stats = analyze_contributions(events)
    
    print(f'\n✨ Estatísticas das últimas atividades:')
    print(f'   - Total de eventos: {stats["total_events"]}')
    print(f'   - Pushes: {stats["push_events"]}')
    print(f'   - Pull Requests: {stats["pr_events"]}')
    print(f'   - Issues: {stats["issue_events"]}')
    print(f'   - Repositórios ativos: {len(stats["languages"])}')
    
    return stats

if __name__ == '__main__':
    generate_report()
