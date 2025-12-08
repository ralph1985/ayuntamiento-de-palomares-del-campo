import { describe, it, expect } from 'vitest';
import {
  buildExtraPaths,
  buildStaticPaths,
  getNavLinks,
  translatePath,
} from '../src/routes.config';

describe('pm-i18n integration in palomares', () => {
  it('translates static routes between locales', () => {
    expect(translatePath('/es/sobre-el-pueblo', 'en')).toBe('/en/about');
    expect(translatePath('/en/about', 'es')).toBe('/es/sobre-el-pueblo');
  });

  it('translates extra entries (galleries) between locales', () => {
    expect(translatePath('/es/galerias/galeria-1', 'en')).toBe(
      '/en/galleries/gallery-1'
    );
    expect(translatePath('/en/galleries/gallery-1', 'es')).toBe(
      '/es/galerias/galeria-1'
    );
  });

  it('builds nav links per locale without home', () => {
    const enNav = getNavLinks('en');
    const esNav = getNavLinks('es');
    const enHrefs = enNav.map(link => link.href);
    const esHrefs = esNav.map(link => link.href);

    expect(enHrefs).toContain('/en/about');
    expect(enHrefs).toContain('/en/contact');
    expect(esHrefs).toContain('/es/sobre-el-pueblo');
    expect(esHrefs).toContain('/es/contacto');
    expect(enHrefs.find(h => h === '/en')).toBeUndefined();
    expect(esHrefs.find(h => h === '/es')).toBeUndefined();
  });

  it('builds static paths (excluding home) and extra paths', () => {
    const staticPaths = buildStaticPaths();
    const extraPaths = buildExtraPaths();

    const staticParams = staticPaths.map(p => `${p.params.lang}:${p.params.path.join('/')}`);
    const extraParams = extraPaths.map(p => `${p.params.lang}:${p.params.path.join('/')}`);

    expect(staticParams).toContain('es:sobre-el-pueblo');
    expect(staticParams).toContain('en:about');
    expect(staticParams).not.toContain('es:'); // home excluded
    expect(extraParams).toContain('es:galerias/galeria-1');
    expect(extraParams).toContain('en:galleries/gallery-1');
  });
});
