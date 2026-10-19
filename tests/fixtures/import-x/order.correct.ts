import path from 'node:path'

import xo from 'xo'

import {helper} from '@/lib/helper.js'

import {fixture} from '@/tests/fixture.js'

import {type Thing} from '@/types/thing.js'

import {component} from '@/components/component.js'

import {sibling} from './sibling.js'

export function collect(thing: Thing) {
  return [path.sep, xo, helper, fixture, component, sibling, thing]
}
