export function init() {
  const dispatch = d3.dispatch('toggled');
  const select = d3.select('body');
  select.classed('disabled', false);
  select.classed('active', true);
}
