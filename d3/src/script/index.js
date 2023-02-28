export function init() {
  const body = d3.select('body');
  body.classed('disabled', false);
  body.classed('active', true);
  const data = [1, 2, 3, 4];
  const divInsert = body.insert('div', '.layer-background').attr('class', 'insert').text('Insert');
  const divAppend = body.append('div', '.layer-background').attr('class', 'append').text('Append');
  d3.selectAll('div').style('padding', '13px');
  divInsert.on('mousemove', e => {
    console.log('divInsert mousemove: ', e);
  }).on('mouseout', e => {

  });

  divAppend.on('mousemove', e => {
    console.log('divAppend mousemove: ', e);
  }).on('mouseout', e => {

  });
}
