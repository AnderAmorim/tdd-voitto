import React from 'react'
import renderer from 'react-test-renderer'
import Link from './Link'

test('Verificamdo conteúdo de Link.js', () => {
    const app = renderer.create(
        <Link page="http://www.facebook.com.br">Facebookkkkk</Link>
    ).toJSON()
    expect(app).toMatchSnapshot()
})